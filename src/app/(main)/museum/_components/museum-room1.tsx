import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ILIAD_TIMELINE, TROY_MAP_LOCATIONS } from '@/lib/constants';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Flame } from 'lucide-react';

export default function MuseumRoom1() {
  const mapImage = PlaceHolderImages.find(img => img.id === 'troy-map');

  return (
    <Card className="bg-card/50 border-0 shadow-none">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-primary text-center">Không gian chiến trận</CardTitle>
      </CardHeader>
      <CardContent className="space-y-12">
        {/* Timeline Section */}
        <div>
          <h3 className="text-2xl font-headline mb-6 text-center text-foreground/80">Timeline 10 năm cuộc chiến</h3>
          <div className="relative w-full">
            {/* Timeline line */}
            <div className="absolute top-[50px] left-0 w-full h-0.5 bg-border -z-10"></div>
            
            <div className="grid grid-cols-4 gap-x-2 sm:gap-x-4">
              {ILIAD_TIMELINE.map((item, index) => (
                <div key={item.year} className="flex flex-col items-center text-center">
                  {/* Timeline Point */}
                  <div className="relative bg-background p-1.5 rounded-full border-2 border-primary mb-3 mt-1">
                     <Flame className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className='flex flex-col'>
                    <span className="font-bold text-base sm:text-lg text-primary">{item.year}</span>
                    <p className="text-xs text-muted-foreground mt-1 leading-snug">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Map Section */}
        <div>
          <h3 className="text-2xl font-headline mb-6 text-foreground/80">Bản đồ tương tác thành Troy</h3>
          <p className="text-muted-foreground mb-4 max-w-prose">Di chuột qua các điểm đánh dấu trên bản đồ để khám phá các địa điểm quan trọng.</p>
          <TooltipProvider>
            <div className="relative w-full max-w-4xl mx-auto aspect-[4/3] rounded-lg overflow-hidden border-2 border-primary/20">
              {mapImage && (
                <Image
                  src={mapImage.imageUrl}
                  alt={mapImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={mapImage.imageHint}
                />
              )}
              {TROY_MAP_LOCATIONS.map((loc) => (
                <Tooltip key={loc.name}>
                  <TooltipTrigger
                    className="absolute w-4 h-4 rounded-full bg-accent animate-pulse"
                    style={{ top: loc.top, left: loc.left }}
                    aria-label={`Tooltip for ${loc.name}`}
                  />
                  <TooltipContent>
                    <p className="font-bold">{loc.name}</p>
                    <p>{loc.description}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
}
