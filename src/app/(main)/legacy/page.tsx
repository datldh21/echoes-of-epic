import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { GitCompare } from "lucide-react";

export default function LegacyPage() {
  return (
    <div className="flex-1 space-y-8 p-4 md:p-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight font-headline text-primary">Nhịp Cầu Thời Gian</h2>
        <p className="text-muted-foreground mt-2">
          Soi chiếu giá trị sử thi vào cuộc sống hiện đại.
        </p>
      </div>

      <div className="grid gap-8">
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
              className="h-full min-h-[200px] resize-none"
            />
          </CardContent>
          <CardFooter>
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
              className="h-full min-h-[200px] resize-none"
            />
          </CardContent>
          <CardFooter>
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
              className="h-full min-h-[200px] resize-none"
            />
          </CardContent>
          <CardFooter>
            <Button>Gửi</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
