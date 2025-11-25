'use client'

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

type Podcast = {
  id: number;
  title: string;
  speaker: string;
  avatar: string;
  summary: string;
  transcript: string;
};

export default function PodcastCard({ podcast }: { podcast: Podcast }) {

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
        <Button variant="outline" className="w-full" disabled>
          <Play className="mr-2 h-4 w-4" />
          Phát Podcast
        </Button>
      </CardFooter>
    </Card>
  );
}
