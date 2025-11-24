'use client'

import Image from 'next/image';
import { useState, useTransition } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Sparkles, Loader2 } from 'lucide-react';
import { summarizePodcastEpisode } from '@/ai/flows/summarize-podcast-episodes';
import { useToast } from '@/hooks/use-toast';

type Podcast = {
  id: number;
  title: string;
  speaker: string;
  avatar: string;
  summary: string;
  transcript: string;
};

export default function PodcastCard({ podcast }: { podcast: Podcast }) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [summary, setSummary] = useState(podcast.summary);

  const handleGenerateSummary = () => {
    startTransition(async () => {
      toast({ title: "Đang tạo tóm tắt mới..." });
      const result = await summarizePodcastEpisode({ episodeContent: podcast.transcript });
      if (result.summary) {
        setSummary(result.summary);
        toast({
          title: "Tạo tóm tắt thành công!",
          description: `Tóm tắt mới cho podcast của ${podcast.speaker} đã được tạo.`,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Tạo tóm tắt thất bại",
          description: "Đã có lỗi xảy ra. Vui lòng thử lại.",
        });
      }
    });
  };

  return (
    <Card className="flex flex-col h-full bg-card/70 hover:bg-card transition-colors duration-300">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Image
            src={podcast.avatar}
            alt={`Avatar of ${podcast.speaker}`}
            width={64}
            height={64}
            className="rounded-full border-2 border-primary/30 object-cover aspect-square"
          />
          <div>
            <CardTitle className="font-headline text-2xl text-primary">{podcast.title}</CardTitle>
            <CardDescription>bởi {podcast.speaker}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{summary}</p>
        {isPending && <p className="flex items-center text-sm text-primary mt-2"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Đang xử lý...</p>}
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-2">
        <Button variant="outline" className="w-full">
          <Play className="mr-2 h-4 w-4" />
          Phát Podcast
        </Button>
      </CardFooter>
    </Card>
  );
}
