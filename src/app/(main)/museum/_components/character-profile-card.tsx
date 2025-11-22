'use client'

import Image from 'next/image';
import { useState, useTransition } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { generateAvatar } from '@/ai/flows/generate-ai-avatars';
import { useToast } from '@/hooks/use-toast';
import { Sparkles } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type Character = {
  name: string;
  avatarId: string;
  description: string;
  info: Record<string, string>;
  stats: Record<string, number>;
  quote: string;
};

export default function CharacterProfileCard({ character }: { character: Character }) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const initialAvatar = PlaceHolderImages.find(img => img.id === character.avatarId)?.imageUrl || '';
  const [avatarUrl, setAvatarUrl] = useState(initialAvatar);

  const handleGenerateAvatar = () => {
    startTransition(async () => {
      const result = await generateAvatar({ characterDescription: `A classical bust-style portrait of ${character.name} from Homer's Iliad, ${character.description}` });
      if (result.avatarDataUri) {
        setAvatarUrl(result.avatarDataUri);
        toast({
          title: "Tạo avatar thành công!",
          description: `Avatar mới cho ${character.name} đã được tạo.`,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Tạo avatar thất bại",
          description: "Đã có lỗi xảy ra. Vui lòng thử lại.",
        });
      }
    });
  };

  return (
    <Card className="flex flex-col h-full bg-card/70 hover:bg-card transition-colors duration-300">
      <CardHeader className="flex flex-row items-center gap-4">
        <Image
          src={avatarUrl}
          alt={`Avatar of ${character.name}`}
          width={80}
          height={80}
          className="rounded-full border-2 border-primary/50 object-cover"
        />
        <div>
          <CardTitle className="font-headline text-xl text-primary">{character.name}</CardTitle>
          <CardDescription>{character.info["Dòng dõi"]}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <p className="text-sm text-muted-foreground">{character.description}</p>
        <div>
          <h4 className="font-semibold mb-2">Chỉ số nhân vật</h4>
          <div className="space-y-3">
            {Object.entries(character.stats).map(([key, value]) => (
              <div key={key}>
                <div className="flex justify-between items-center mb-1 text-sm">
                  <span className="font-medium text-foreground/80">{key}</span>
                  <span className="text-primary font-semibold">{value}/10</span>
                </div>
                <Progress value={value * 10} className="h-2" />
              </div>
            ))}
          </div>
        </div>
        <blockquote className="border-l-2 border-primary pl-4 italic text-sm text-muted-foreground">
          {character.quote}
        </blockquote>
      </CardContent>
      <CardFooter>
        <Button onClick={handleGenerateAvatar} disabled={isPending} className="w-full">
          <Sparkles className="mr-2 h-4 w-4" />
          {isPending ? "Đang tạo Avatar..." : "Tạo Avatar AI mới"}
        </Button>
      </CardFooter>
    </Card>
  );
}
