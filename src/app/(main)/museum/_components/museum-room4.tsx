import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function MuseumRoom4() {
  const artifactImages = PlaceHolderImages.filter(img => img.id.startsWith('artifact-'));

  return (
    <Card className="bg-card/50 border-0 shadow-none">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl text-primary">Phòng 4: Hiện vật</CardTitle>
        <CardDescription>
          Chiêm ngưỡng những hiện vật khảo cổ và các tác phẩm nghệ thuật, giúp tái hiện lại thế giới của sử thi Iliad.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {artifactImages.map(image => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg">
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={800}
                height={600}
                className="object-cover w-full h-full aspect-video transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={image.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-white text-lg font-semibold">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

    