import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FileAudio, FileVideo, Image as ImageIcon, FileText } from 'lucide-react';

const studentWorks = [
  { type: 'Audio', title: 'Khúc bi ca cho Hector', icon: FileAudio, imageId: 'student-work-1' },
  { type: 'Video', title: '1 Phút tái hiện chia ly', icon: FileVideo, imageId: 'student-work-2' },
  { type: 'Tranh', title: 'Nước mắt Andromache', icon: ImageIcon, imageId: 'gallery-art-1' },
  { type: 'Thơ', title: 'Lời từ biệt gửi gió', icon: FileText, imageId: 'gallery-art-2' },
];

export default function MuseumRoom3() {
  return (
    <Card className="bg-card/50 border-0 shadow-none">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-primary">Không gian cảm xúc gia đình</CardTitle>
        <CardDescription>Trưng bày các tác phẩm sáng tạo của học sinh và không gian để bạn chia sẻ cảm nghĩ.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-12">
        <div>
          <h3 className="text-2xl font-headline mb-6 text-foreground/80">Sản phẩm sáng tạo</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentWorks.map(work => {
              const image = PlaceHolderImages.find(img => img.id === work.imageId);
              return (
                <Card key={work.title} className="overflow-hidden group">
                  <div className="relative aspect-video">
                    {image && <Image src={image.imageUrl} alt={work.title} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <work.icon className="w-12 h-12 text-white/80" />
                    </div>
                  </div>
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">{work.title}</CardTitle>
                    <CardDescription>{work.type}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-headline mb-6 text-foreground/80">Góc tương tác</h3>
          <div className="space-y-8 max-w-2xl mx-auto">
            <div className="space-y-2">
              <label htmlFor="q1" className="text-lg font-semibold text-foreground/90">Nếu bạn là Andromache, bạn sẽ nói thêm điều gì với Hector trước khi chàng ra trận?</label>
              <Input id="q1" placeholder="Chia sẻ suy nghĩ của bạn..." />
            </div>
            <div className="space-y-2">
              <label htmlFor="q2" className="text-lg font-semibold text-foreground/90">Khoảnh khắc Hector bế con trai Astyanax gợi cho bạn liên tưởng gì đến hình ảnh người cha trong cuộc sống hôm nay?</label>
              <Input id="q2" placeholder="Chia sẻ liên tưởng của bạn..." />
            </div>
            <Button className='w-full sm:w-auto'>Gửi câu trả lời</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
