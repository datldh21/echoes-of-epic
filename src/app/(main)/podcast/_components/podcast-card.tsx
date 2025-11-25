
'use client'

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

type Podcast = {
  id: number;
  title: string;
  speaker: string;
  avatar: string;
  summary: string;
  transcript: string;
};

type PodcastCardProps = {
  podcast: Podcast;
  isPlaying: boolean;
  onPlay: () => void;
};


const DEMO_AUDIO_URL = "https://storage.googleapis.com/iwiki_test/test_uploads/file_example_WAV_5MG.wav";

export default function PodcastCard({ podcast, isPlaying, onPlay }: PodcastCardProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (!audioRef.current) {
        audioRef.current = new Audio(DEMO_AUDIO_URL);
    }
    const audio = audioRef.current;
    
    const handleAudioEnd = () => {
        onPlay(); // Toggle off when audio ends
        setProgress(0);
    };

    const handleTimeUpdate = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener('ended', handleAudioEnd);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.pause();
      audio.removeEventListener('ended', handleAudioEnd);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [onPlay]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Audio play failed:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleReplay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      if (!isPlaying) {
        onPlay(); // This will trigger the useEffect to play
      } else {
        // If it's already playing, just seek to 0 and it will continue
        audioRef.current.play().catch(e => console.error("Audio play failed:", e));
      }
    }
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
        <p className="text-muted-foreground">{podcast.summary}</p>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-2">
        <Button variant="outline" className="w-full relative" onClick={onPlay}>
          {isPlaying ? (
            <>
              <Pause className="mr-2 h-4 w-4" />
              Tạm dừng
              <Progress value={progress} className="absolute bottom-0 left-0 w-full h-1" />
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" />
              Phát Podcast
              { progress > 0 && <Progress value={progress} className="absolute bottom-0 left-0 w-full h-1" /> }
            </>
          )}
        </Button>
        <Button variant="ghost" size="icon" onClick={handleReplay} aria-label="Phát lại">
          <RotateCcw className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
}
