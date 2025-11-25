'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FileAudio, FileVideo, Image as ImageIcon, FileText, Send, Shield, Swords, Info, Download } from 'lucide-react';
import { MINIGAME_CHOICES } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';

const studentWorks = [
  { type: 'Audio', title: 'Khúc bi ca cho Hector', icon: FileAudio, imageId: 'student-work-1' },
  { type: 'Video', title: '1 Phút tái hiện chia ly', icon: FileVideo, imageId: 'student-work-2' },
  { type: 'Tranh', title: 'Nước mắt Andromache', icon: ImageIcon, imageId: 'gallery-art-1' },
  { type: 'Thơ', title: 'Lời từ biệt gửi gió', icon: FileText, imageId: 'gallery-art-2' },
];

interface StoredAnswer {
  question1: string;
  question2: string;
  question3: string;
  strategicChoice: string | null;
  timestamp: string;
}

export default function MuseumRoom3() {
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [allAnswers, setAllAnswers] = useState<StoredAnswer[]>([]);
  const { toast } = useToast();

  const handleSendAnswers = () => {
    if (!answer1 && !answer2 && !answer3 && selectedChoice === null) {
      toast({
        variant: "destructive",
        title: "Chưa có câu trả lời",
        description: "Vui lòng nhập câu trả lời hoặc chọn một chiến lược.",
      });
      return;
    }

    const newAnswer: StoredAnswer = {
      question1: answer1,
      question2: answer2,
      question3: answer3,
      strategicChoice: selectedChoice !== null ? MINIGAME_CHOICES[selectedChoice].title : null,
      timestamp: new Date().toISOString(),
    };
    
    setAllAnswers(prev => [...prev, newAnswer]);
    
    setAnswer1('');
    setAnswer2('');
    setAnswer3('');
    setSelectedChoice(null);

    toast({
      title: "Gửi thành công!",
      description: "Cảm ơn bạn đã chia sẻ suy nghĩ của mình. Câu trả lời của bạn đã được ghi lại.",
    });
  };

  const handleDownload = () => {
    if (allAnswers.length === 0) {
      toast({
        variant: "destructive",
        title: "Không có dữ liệu",
        description: "Chưa có câu trả lời nào được ghi lại để tải xuống.",
      });
      return;
    }

    const jsonString = JSON.stringify(allAnswers, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'answers.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const choices = [
    { title: "Đóng cổng thành phòng thủ", icon: Shield },
    { title: "Gửi sứ giả hoà giải", icon: Send },
    { title: "Ra quân tổng lực", icon: Swords }
  ];

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
              <Input id="q1" value={answer1} onChange={e => setAnswer1(e.target.value)} placeholder="Chia sẻ suy nghĩ của bạn..." />
            </div>
            <div className="space-y-2">
              <label htmlFor="q2" className="text-lg font-semibold text-foreground/90">Đứng trước lời khẩn cầu tha thiết của Andromache, nếu bạn là Hector, bạn có suy nghĩ, thái độ và cách ứng xử như thế nào?</label>
              <Input id="q2" value={answer2} onChange={e => setAnswer2(e.target.value)} placeholder="Chia sẻ suy nghĩ của bạn..." />
            </div>

            <Card className="bg-transparent border-0 shadow-none">
                <CardHeader className="p-0">
                    <p className="text-lg font-semibold text-foreground/90">Bạn là người lãnh đạo của Troy. Tình thế ngàn cân treo sợi tóc. Hãy chọn chiến lược của mình.</p>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row gap-4 justify-center px-0 pt-4 pb-0">
                    {choices.map((choice, index) => {
                      const Icon = choice.icon;
                      return (
                        <Button
                          key={index}
                          variant={selectedChoice === index ? 'default' : 'outline'}
                          className="h-auto py-4 flex-1 flex-col gap-2"
                          onClick={() => setSelectedChoice(index)}
                        >
                          <Icon /> {choice.title}
                        </Button>
                      )
                    })}
                </CardContent>
                 {selectedChoice !== null && (
                  <CardFooter className="flex-col items-start p-0 pt-6">
                      <CardTitle className="font-headline text-xl text-primary flex items-center gap-3 mb-2">
                        <Info /> Kết quả chiến lược
                      </CardTitle>
                      <p className="text-base text-foreground/90 leading-relaxed">
                        {MINIGAME_CHOICES[selectedChoice].result}
                      </p>
                  </CardFooter>
                )}
            </Card>

            <div className="space-y-2">
              <label htmlFor="q3" className="text-lg font-semibold text-foreground/90">Khoảnh khắc Hector bế con trai Astyanax gợi cho bạn liên tưởng gì đến hình ảnh người cha trong cuộc sống hôm nay?</label>
              <Input id="q3" value={answer3} onChange={e => setAnswer3(e.target.value)} placeholder="Chia sẻ liên tưởng của bạn..." />
            </div>
             <div className="flex justify-center gap-4">
              <Button onClick={handleSendAnswers}><Send /> Gửi câu trả lời</Button>
              <Button onClick={handleDownload} variant="outline"><Download /> Tải xuống</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
