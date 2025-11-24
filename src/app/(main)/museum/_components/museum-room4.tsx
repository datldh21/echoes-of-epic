import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function MuseumRoom4() {
  const artifactImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-art'));

  return (
    <Card className="bg-card/50 border-0 shadow-none">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl text-primary">Hiện vật Sử thi</CardTitle>
        <CardDescription>Các tác phẩm nghệ thuật và hiện vật lấy cảm hứng từ sử thi Iliad.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifactImages.map(image => (
            <Card key={image.id} className="overflow-hidden group">
              <div className="relative aspect-video">
                <Image 
                  src={image.imageUrl} 
                  alt={image.description} 
                  fill 
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={image.imageHint}
                />
              </div>
              <CardFooter className="p-4 bg-background/50">
                <p className="text-sm text-muted-foreground">{image.description}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
