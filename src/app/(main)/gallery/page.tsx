import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ArtGenerator from "./_components/art-generator";

export default function GalleryPage() {
    const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-art'));

    return (
        <div className="container mx-auto px-4 py-12">
            <header className="text-center mb-12">
                <h1 className="font-headline text-5xl md:text-6xl text-primary">Xưởng Sáng Tạo</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Nơi trưng bày những tác phẩm nghệ thuật lấy cảm hứng từ Iliad và là nơi bạn có thể tự mình tạo ra những bức tranh sử thi.
                </p>
            </header>

            <section className="mb-20">
                <h2 className="text-3xl font-headline mb-6 text-center text-primary/80">Bộ sưu tập</h2>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-4xl mx-auto"
                >
                    <CarouselContent>
                        {galleryImages.map((image, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="overflow-hidden">
                                        <CardContent className="p-0 flex aspect-video items-center justify-center">
                                            <Image
                                                src={image.imageUrl}
                                                alt={image.description}
                                                width={600}
                                                height={400}
                                                className="object-cover w-full h-full"
                                                data-ai-hint={image.imageHint}
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>

            <section>
                <ArtGenerator />
            </section>
        </div>
    );
}
