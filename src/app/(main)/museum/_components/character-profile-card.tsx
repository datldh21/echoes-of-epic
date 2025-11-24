'use client'

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  const initialAvatar = PlaceHolderImages.find(img => img.id === character.avatarId)?.imageUrl || '';
  const [avatarUrl] = useState(initialAvatar);

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
          <h4 className="font-semibold mb-3">Phẩm chất sử thi</h4>
          <div className="flex flex-wrap gap-2">
            {Object.keys(character.stats).map((key) => (
              <Badge key={key} variant="secondary" className="font-normal">
                {key}
              </Badge>
            ))}
          </div>
        </div>
        <blockquote className="border-l-2 border-primary pl-4 italic text-sm text-muted-foreground pt-2">
          {character.quote}
        </blockquote>
      </CardContent>
    </Card>
  );
}
