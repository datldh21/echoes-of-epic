'use client'

import Image from 'next/image';
import { useState, useRef, useTransition, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { generatePodcastAudio } from '@/ai/flows/generate-podcast-audio';

type Podcast = {
  id: number;
  title: string;
  speaker: string;
  avatar: string;
  summary: string;
  transcript: string;
};

export default function PodcastCard({ podcast }: { podcast: Podcast }) {
  const [summary] = useState(podcast.summary);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGenerating, startTransition] = useTransition();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const handleGenerateAudio = () => {
    if (audioUrl) {
      handlePlayPause();
      return;
    }

    startTransition(async () => {
      try {
        const result = await generatePodcastAudio({ text: podcast.transcript });
        setAudioUrl(result.audioDataUri);
      } catch (error) {
        console.error("Failed to generate audio:", error);
        toast({
          variant: "destructive",
          title: "Không thể tạo âm thanh",
          description: "Đã có lỗi xảy ra trong quá trình tạo podcast. Vui lòng thử lại.",
        });
      }
    });
  };

  useEffect(() => {
    if (audioUrl && audioRef.current) {
        audioRef.current.play();
    }
  }, [audioUrl]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
    };
  }, [audioRef.current]);

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
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-2">
        <Button variant="outline" className="w-full" onClick={handleGenerateAudio} disabled={isGenerating}>
          {isGenerating ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : isPlaying ? (
            <Pause className="mr-2 h-4 w-4" />
          ) : (
            <Play className="mr-2 h-4 w-4" />
          )}
          {isGenerating ? 'Đang tạo audio...' : isPlaying ? 'Tạm dừng' : 'Phát Podcast'}
        </Button>
        {audioUrl && (
            <audio ref={audioRef} src={audioUrl} className="hidden" />
        )}
      </CardFooter>
    </Card>
  );
}
