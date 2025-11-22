'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DEBATE_CHARACTERS, CHARACTERS, findCharacterAvatar } from '@/lib/constants';
import { ThumbsUp, User, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Argument {
  id: number;
  character: string;
  text: string;
  votes: number;
}

const initialArguments: Argument[] = [
  { id: 1, character: "Hector", text: "Trách nhiệm của một người lãnh đạo là phải bảo vệ người dân của mình, dù phải hy sinh hạnh phúc cá nhân. Rời bỏ trận chiến lúc này là một hành động hèn nhát và sẽ đẩy Troy vào cảnh diệt vong.", votes: 15 },
  { id: 2, character: "Andromache", text: "Vinh quang nào có ý nghĩa khi gia đình tan nát? Một người chồng, người cha còn sống quan trọng hơn một anh hùng đã chết. Astyanax cần cha của nó.", votes: 22 },
  { id: 3, character: "Priam", text: "Hector là niềm hy vọng cuối cùng của Troy. Ta đã mất quá nhiều người con trai. Nhưng số phận của thành phố này nằm trên vai nó. Nó phải chiến đấu.", votes: 8 },
];

export default function DebateBoard() {
  const [argumentsList, setArgumentsList] = useState<Argument[]>(initialArguments);
  const [newArgument, setNewArgument] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(DEBATE_CHARACTERS[0]);
  const { toast } = useToast();

  const handleVote = (id: number) => {
    setArgumentsList(prev =>
      prev.map(arg => (arg.id === id ? { ...arg, votes: arg.votes + 1 } : arg))
        .sort((a, b) => b.votes - a.votes)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newArgument.length < 70 || newArgument.length > 200) {
      toast({
        variant: "destructive",
        title: "Lập luận không hợp lệ",
        description: "Lập luận của bạn phải dài từ 70 đến 200 ký tự.",
      });
      return;
    }
    const newArg: Argument = {
      id: Date.now(),
      character: selectedCharacter,
      text: newArgument,
      votes: 0,
    };
    setArgumentsList(prev => [newArg, ...prev]);
    setNewArgument('');
    toast({
      title: "Đăng lập luận thành công!",
      description: `Quan điểm của ${selectedCharacter} đã được ghi nhận.`,
    });
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <Card className="sticky top-24 bg-card/50">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2"><MessageSquare /> Gửi Lập Luận</CardTitle>
            <CardDescription>Chọn nhân vật và viết lập luận (70-200 chữ).</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Chọn nhân vật</label>
                <Select value={selectedCharacter} onValueChange={setSelectedCharacter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn một nhân vật..." />
                  </SelectTrigger>
                  <SelectContent>
                    {DEBATE_CHARACTERS.map(char => (
                      <SelectItem key={char} value={char}>{char}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Lập luận của bạn</label>
                <Textarea
                  value={newArgument}
                  onChange={e => setNewArgument(e.target.value)}
                  placeholder={`Nhập vai ${selectedCharacter} và viết...`}
                  rows={6}
                />
                <p className="text-xs text-right text-muted-foreground mt-1">{newArgument.length} / 200</p>
              </div>
              <Button type="submit" className="w-full">Gửi</Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-2 space-y-6">
        {argumentsList.map(arg => {
          const charData = CHARACTERS.find(c => c.name.toLowerCase().includes(arg.character.toLowerCase()));
          const avatarUrl = charData ? findCharacterAvatar(charData.avatarId) : null;
          return (
            <Card key={arg.id} className="bg-card/70">
              <CardHeader className="flex flex-row items-start gap-4">
                {avatarUrl ? (
                  <Image src={avatarUrl} alt={charData!.name} width={48} height={48} className="rounded-full border" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center"><User /></div>
                )}
                <div>
                  <CardTitle className="text-xl font-headline text-primary/90">{arg.character}</CardTitle>
                  <p className="text-sm text-muted-foreground">Quan điểm</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90">{arg.text}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <ThumbsUp className="h-5 w-5" />
                  <span>{arg.votes}</span>
                </div>
                <Button variant="outline" onClick={() => handleVote(arg.id)}>
                  <ThumbsUp className="mr-2 h-4 w-4" /> Bỏ phiếu
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
