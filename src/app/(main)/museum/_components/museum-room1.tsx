import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { ILIAD_TIMELINE, TROY_MAP_LOCATIONS } from '@/lib/constants';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function MuseumRoom1() {
  const mapImage = PlaceHolderImages.find(img => img.id === 'troy-map');

  return (
    <Card className="bg-card/50 border-0 shadow-none">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-primary">Không gian chiến trận Iliad</CardTitle>
      </CardHeader>
      <CardContent className="space-y-12">
        {/* Timeline Section */}
        <div>
          <h3 className="text-2xl font-headline mb-6 text-foreground/80">Timeline 10 năm cuộc chiến</h3>
          <ScrollArea className="w-full whitespace-nowrap rounded-lg border border-dashed border-border p-4">
            <div className="flex w-max space-x-8">
              {ILIAD_TIMELINE.map((item, index) => (
                <div key={item.year} className="flex items-center gap-4">
                  <div className="flex flex-col text-center">
                    <span className="font-bold text-lg text-primary">{item.year}</span>
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap w-48">{item.event}</p>
                  </div>
                  {index < ILIAD_TIMELINE.length - 1 && (
                    <div className="h-px w-24 bg-border" />
                  )}
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
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
