import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Separator } from "@/components/ui/separator";

export default function LegacyPage() {
  const videoImage = PlaceHolderImages.find(img => img.id === 'modern-hero-interview');

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-6xl text-primary">Nhịp Cầu Thời Gian</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Những giá trị và bài học từ Iliad vẫn còn vang vọng và soi chiếu vào cuộc sống hiện đại của chúng ta như thế nào?
        </p>
      </header>

      <main className="space-y-20">
        {/* Hero Comparison Section */}
        <section>
          <h2 className="text-3xl font-headline mb-8 text-center text-primary/80">Anh hùng Sử thi vs. Anh hùng Hôm nay</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Anh hùng Sử thi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p><strong>Đặc điểm:</strong> Sức mạnh phi thường, lòng dũng cảm, theo đuổi vinh quang cá nhân và danh dự bộ tộc.</p>
                <p><strong>Xung đột:</strong> Giữa định mệnh và ý chí tự do, giữa tình cảm cá nhân và trách nhiệm cộng đồng.</p>
                <p><strong>Ví dụ:</strong> Hector, Achilles.</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Anh hùng Hôm nay</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p><strong>Đặc điểm:</strong> Lòng nhân ái, trí tuệ, sự cống hiến thầm lặng, dám đấu tranh cho lẽ phải và cộng đồng.</p>
                <p><strong>Xung đột:</strong> Giữa lý tưởng và thực tế, giữa lợi ích cá nhân và sự tiến bộ xã hội.</p>
                <p><strong>Ví dụ:</strong> Các nhà khoa học, bác sĩ, nhà hoạt động xã hội...</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="max-w-xs mx-auto" />

        {/* Reflection Section */}
        <section className="max-w-3xl mx-auto">
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Góc Suy Ngẫm</CardTitle>
              <CardDescription>
                Thanh niên Việt Nam ngày nay đối mặt với lựa chọn giữa cống hiến cho xã hội và theo đuổi hạnh phúc cá nhân như thế nào?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea placeholder="Viết đoạn văn ngắn (khoảng 150 chữ) chia sẻ quan điểm của bạn..." rows={6} />
            </CardContent>
            <CardFooter>
              <Button>Gửi bài viết</Button>
            </CardFooter>
          </Card>
        </section>

        <Separator className="max-w-xs mx-auto" />

        {/* Video Interview Section */}
        <section>
          <h2 className="text-3xl font-headline mb-8 text-center text-primary/80">Phỏng vấn thời hiện đại</h2>
          <Card className="max-w-3xl mx-auto overflow-hidden bg-card/50">
            {videoImage && (
              <div className="relative aspect-video">
                <Image src={videoImage.imageUrl} alt={videoImage.description} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <PlayIcon className="w-20 h-20 text-white/70 hover:text-white transition-colors cursor-pointer" />
                </div>
              </div>
            )}
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Nếu là Hector thời hiện đại, bạn sẽ ứng xử thế nào?</CardTitle>
              <CardDescription>
                Xem video phỏng vấn các bạn trẻ về sự lựa chọn giữa gia đình và sự nghiệp, trách nhiệm trong thế giới ngày nay.
              </CardDescription>
            </CardHeader>
          </Card>
        </section>
      </main>
    </div>
  );
}

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    )
  }
