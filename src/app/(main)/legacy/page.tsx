import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LegacyPage() {
  return (
    <div className="flex-1 space-y-8 p-4 md:p-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight font-headline text-primary">Nhịp Cầu Thời Gian</h2>
        <p className="text-muted-foreground">
          Soi chiếu giá trị sử thi vào cuộc sống hiện đại.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline text-xl">Anh hùng Sử thi</CardTitle>
            <CardDescription>
              Quan niệm về người anh hùng trong sử thi Iliad.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <Textarea 
              placeholder="Nhập quan điểm của bạn về anh hùng sử thi..."
              className="h-full min-h-[150px] resize-none"
            />
          </CardContent>
          <CardFooter className="justify-center">
            <Button>Gửi</Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline text-xl">Anh hùng Hôm nay</CardTitle>
            <CardDescription>
              Quan niệm về người anh hùng trong xã hội đương đại.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
             <Textarea 
              placeholder="Nhập quan điểm của bạn về anh hùng ngày nay..."
              className="h-full min-h-[150px] resize-none"
            />
          </CardContent>
          <CardFooter className="justify-center">
            <Button>Gửi</Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline text-xl">Góc suy ngẫm</CardTitle>
            <CardDescription>
            Tuổi trẻ Việt Nam hôm nay cần làm gì để thể hiện trách nhiệm của bản thân đối với quê hương, đất nước?
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
             <Textarea 
              placeholder="Chia sẻ suy nghĩ của bạn..."
              className="h-full min-h-[150px] resize-none"
            />
          </CardContent>
          <CardFooter className="justify-center">
            <Button>Gửi</Button>
          </CardFooter>
        </Card>
      </div>

      <section className="mt-24 text-center">
        <h3 className="font-headline text-3xl text-primary flex items-center justify-center gap-3">
          KHÁM PHÁ BẢO TÀNG SỐ
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Nơi bạn có thể tìm hiểu về bối cảnh, nhân vật và các sự kiện chính của sử thi Iliad.
        </p>
        <Button asChild size="lg" className="mt-8 group bg-primary hover:bg-primary/90">
          <Link href="/museum">
            Quay lại Bảo tàng số
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
