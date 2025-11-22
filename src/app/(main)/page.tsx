import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FEATURE_CARDS } from '@/lib/constants';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'troy-gate-banner');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="group relative flex h-[60vh] min-h-[500px] w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent z-10" />
        {heroImage && (
           <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover transition-transform duration-500 group-hover:animate-gate-open"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="relative z-20 flex flex-col items-center text-center text-white p-4">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl drop-shadow-2xl text-primary">
            ÂM VANG SỬ THI
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg md:text-xl text-balance text-foreground/90 drop-shadow-lg">
            Dự án văn học số về trích đoạn Héctơ từ biệt Ăngđrômác (Iliad – Homer)
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 sm:py-24">
        {/* Introduction Section */}
        <section className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-4xl text-primary">Giới thiệu dự án</h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-lg text-muted-foreground">
            <p className="text-balance">
              “ÂM VANG SỬ THI” là dự án học tập số giúp học sinh khám phá trích đoạn <span className="font-semibold text-foreground">Héctơ từ biệt Ăngđrômác</span> một cách sâu sắc và đa chiều.
            </p>
            <p className="text-balance">
              Thông điệp trung tâm của dự án xoay quanh giá trị nhân văn và bi kịch trong sự lựa chọn giữa <span className="text-primary/90">gia đình – trách nhiệm – danh dự</span>, một chủ đề vẫn còn vang vọng đến ngày hôm nay.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURE_CARDS.map((feature) => (
              <Link href={feature.href} key={feature.title} className="group block">
                <Card className="h-full transform-gpu bg-card/50 transition-all duration-300 hover:bg-card hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-headline text-2xl text-primary/90">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="pt-4 text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-24 text-center">
          <h3 className="font-headline text-3xl text-primary">Bắt đầu hành trình của bạn</h3>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Chọn một trong những cánh cổng trên để bước vào thế giới sử thi Iliad và khám phá những câu chuyện bất tử.
          </p>
          <Button asChild size="lg" className="mt-8 group bg-primary hover:bg-primary/90">
            <Link href="/museum">
              Khám phá Bảo tàng số
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
