'use client';

import { useState, useTransition } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Loader2, Send } from "lucide-react";
import { useToast } from '@/hooks/use-toast';

export default function LegacyPage() {
  const [epicHero, setEpicHero] = useState('');
  const [modernHero, setModernHero] = useState('');
  const [reflection, setReflection] = useState('');
  const { toast } = useToast();
  const [isSubmitting, startTransition] = useTransition();

  const handleSubmit = () => {
    if (!epicHero && !modernHero && !reflection) {
      toast({
        variant: 'destructive',
        title: 'Vui lòng nhập suy nghĩ của bạn',
        description: 'Bạn cần điền ít nhất một trong các ô để gửi.',
      });
      return;
    }

    const data = {
      'anh_hung_su_thi': epicHero,
      'anh_hung_hom_nay': modernHero,
      'goc_suy_ngam': reflection,
      'thoi_gian': new Date().toISOString(),
    };

    startTransition(async () => {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/g2m0uwyd05ole', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ data: [data] })
        });

        if (response.ok) {
          setEpicHero('');
          setModernHero('');
          setReflection('');
          toast({
            title: "Gửi thành công!",
            description: "Cảm ơn bạn đã chia sẻ suy nghĩ. Câu trả lời của bạn đã được ghi lại.",
          });
        } else {
          throw new Error('Failed to submit answers.');
        }
      } catch (error) {
        console.error(error);
        toast({
          variant: "destructive",
          title: "Gửi thất bại!",
          description: "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
        });
      }
    });
  };

  const renderSubmitButton = () => (
    <Button onClick={handleSubmit} disabled={isSubmitting}>
      {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
      {isSubmitting ? 'Đang gửi...' : 'Gửi'}
    </Button>
  );

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
              value={epicHero}
              onChange={(e) => setEpicHero(e.target.value)}
            />
          </CardContent>
          <CardFooter className="justify-center">
            {renderSubmitButton()}
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
              value={modernHero}
              onChange={(e) => setModernHero(e.target.value)}
            />
          </CardContent>
          <CardFooter className="justify-center">
            {renderSubmitButton()}
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
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
            />
          </CardContent>
          <CardFooter className="justify-center">
            {renderSubmitButton()}
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
