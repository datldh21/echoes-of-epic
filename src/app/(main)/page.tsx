import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FEATURE_CARDS } from '@/lib/constants';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookUser, BrainCircuit, Cable, Handshake, Lightbulb, Target, Sparkles, User, BookHeart, Book } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const projectPurposes = [
  { icon: Target, text: "Giúp học sinh tiếp cận văn bản theo cách mới mẻ – sống động" },
  { icon: BrainCircuit, text: "Khơi dậy năng lực cảm thụ và tư duy phân tích của học sinh" },
  { icon: Sparkles, text: "Tăng cường năng lực số và khả năng sáng tạo đa phương tiện" },
  { icon: Handshake, text: "Tạo môi trường học tập mở – gắn kết – chủ động" },
];

const projectMeanings = [
  { icon: Cable, title: "Kết nối truyền thống – hiện đại", description: "Làm sống dậy vẻ đẹp bi tráng của sử thi Hy Lạp qua hình thức học tập số hiện đại, gần gũi với học sinh thế kỉ XXI." },
  { icon: Lightbulb, title: "Nuôi dưỡng cảm hứng học văn", description: "Biến việc đọc hiểu văn bản cổ điển trở thành hành trình khám phá đầy hứng thú và chiều sâu cảm xúc." },
  { icon: BookHeart, title: "Bồi đắp giá trị sống", description: "Giúp học sinh thấu hiểu bi kịch của sự lựa chọn giữa gia đình và nghĩa vụ, qua đó biết trân trọng hòa bình, yêu thương và đồng cảm với con người." },
  { icon: Sparkles, title: "Khuyến khích sáng tạo", description: "Tạo cơ hội để học sinh tự tay thiết kế sản phẩm số, góp phần đổi mới dạy học theo hướng phát triển năng lực." },
]

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
          Dự án học tập số khám phá trích đoạn “Héctơ từ biệt Ăngđrômác” trong sử thi Iliad của Homer
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 sm:py-24 space-y-24">
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

        {/* Project Purpose & Meaning */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <h3 className="font-headline text-3xl text-primary mb-6">Mục đích của dự án</h3>
            <ul className="space-y-4">
              {projectPurposes.map((purpose, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-full bg-primary/10 p-2 text-primary">
                    <purpose.icon className="h-6 w-6" />
                  </div>
                  <span className="text-muted-foreground text-lg pt-1">{purpose.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
             <h3 className="font-headline text-3xl text-primary mb-6">Ý nghĩa của dự án</h3>
             <div className="space-y-6">
                <p className="text-lg text-muted-foreground">Dự án mang lại những giá trị nổi bật:</p>
                {projectMeanings.map((meaning, index) => (
                  <div key={index} className="flex items-start gap-4">
                     <div className="flex-shrink-0 rounded-full bg-primary/10 p-2 text-primary mt-1">
                        <meaning.icon className="h-5 w-5" />
                     </div>
                     <div>
                        <h4 className="font-semibold text-lg text-foreground">{meaning.title}</h4>
                        <p className="text-muted-foreground">{meaning.description}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        <Separator className="max-w-md mx-auto" />

        {/* Author & Work Introduction */}
        <section className="max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl text-primary text-center mb-10">Tác giả, Tác phẩm, Đoạn trích</h2>
          <div className="space-y-10">
            <Card className="bg-card/50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <User className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline text-3xl text-primary/90">Tác giả – Homer</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  Nhà thơ huyền thoại Hy Lạp cổ đại (thế kỉ VIII–VII TCN), là người kể chuyện và hát rong tài năng với những thiên sử thi bất hủ.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Book className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline text-3xl text-primary/90">Sử thi Iliad & Đoạn trích</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-xl text-foreground mb-1">Sử thi Iliad</h4>
                    <p className="text-lg text-muted-foreground">
                      Ra đời vào thế kỉ VIII TCN, gồm 15.963 câu thơ, chia 24 khúc ca, kể về chiến tranh thành Troy và các anh hùng Hy Lạp.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-foreground mb-1">Đoạn trích “Héc-to từ biệt Ăng-đrô-mác”</h4>
                     <p className="text-lg text-muted-foreground">
                      (Câu 360–496, Khúc ca VI) – Hector từ biệt vợ con, thể hiện tình yêu gia đình, bổn phận và bi kịch của người anh hùng.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="pt-8">
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
        <section className="text-center">
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
