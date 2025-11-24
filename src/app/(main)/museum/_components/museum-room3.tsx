import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FileAudio, FileVideo, Image as ImageIcon, FileText, Send, Shield, Swords } from 'lucide-react';

const studentWorks = [
  { type: 'Audio', title: 'Khúc bi ca cho Hector', icon: FileAudio, imageId: 'student-work-1' },
  { type: 'Video', title: '1 Phút tái hiện chia ly', icon: FileVideo, imageId: 'student-work-2' },
  { type: 'Tranh', title: 'Nước mắt Andromache', icon: ImageIcon, imageId: 'gallery-art-1' },
  { type: 'Thơ', title: 'Lời từ biệt gửi gió', icon: FileText, imageId: 'gallery-art-2' },
];

export default function MuseumRoom3() {
  return (
    <Card className="bg-card/50 border-0 shadow-none">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl text-primary">Không gian gia đình</CardTitle>
        <CardDescription>Tái hiện bối cảnh chia ly đầy cảm xúc giữa Hector và vợ con trước khi ra trận.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-12">
        <div>
          <h3 className="text-center text-2xl font-headline mb-6 text-foreground/80">Góc tương tác</h3>
          <div className="space-y-8 max-w-2xl mx-auto">
            <div className="space-y-2">
              <label htmlFor="q1" className="text-lg font-semibold text-foreground/90">Nếu bạn là Andromache, bạn sẽ nói thêm điều gì với Hector trước khi chàng ra trận?</label>
              <Input id="q1" placeholder="Chia sẻ suy nghĩ của bạn..." />
            </div>
            <div className="space-y-2">
              <label htmlFor="q2" className="text-lg font-semibold text-foreground/90">Đứng trước lời khẩn cầu tha thiết của Andromache, nếu bạn là Hector, bạn có suy nghĩ, thái độ và cách ứng xử như thế nào?</label>
              <Input id="q2" placeholder="Chia sẻ suy nghĩ của bạn..." />
            </div>

            <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary/80 text-center">BẢO VỆ TROY</CardTitle>
                    <CardDescription className="text-center">
                        Bạn là người lãnh đạo của Troy. Tình thế ngàn cân treo sợi tóc. Hãy chọn chiến lược của mình.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" className="h-auto py-4 flex-1 flex-col gap-2"><Shield /> Đóng cổng thành phòng thủ</Button>
                    <Button variant="outline" className="h-auto py-4 flex-1 flex-col gap-2"><Send /> Gửi sứ giả hoà giải</Button>
                    <Button variant="outline" className="h-auto py-4 flex-1 flex-col gap-2"><Swords /> Ra quân tổng lực</Button>
                </CardContent>
            </Card>

            <div className="space-y-2">
              <label htmlFor="q3" className="text-lg font-semibold text-foreground/90">Khoảnh khắc Hector bế con trai Astyanax gợi cho bạn liên tưởng gì đến hình ảnh người cha trong cuộc sống hôm nay?</label>
              <Input id="q3" placeholder="Chia sẻ liên tưởng của bạn..." />
            </div>
            <Button className='w-full sm:w-auto'>Gửi câu trả lời</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}