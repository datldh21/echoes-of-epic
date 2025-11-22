'use client'

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MINIGAME_CHOICES } from '@/lib/constants';
import { Shield, Send, Swords, Info } from 'lucide-react';

const ICONS = [Shield, Send, Swords];

export default function GameChoices() {
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {MINIGAME_CHOICES.map((choice, index) => {
          const Icon = ICONS[index];
          return (
            <Button
              key={index}
              variant={selectedChoice === index ? 'default' : 'outline'}
              className="h-auto py-6 text-lg flex flex-col gap-2"
              onClick={() => setSelectedChoice(index)}
            >
              <Icon className="w-8 h-8 mb-2" />
              <span className="text-center">{choice.title}</span>
            </Button>
          );
        })}
      </div>

      {selectedChoice !== null && (
        <Card className="bg-primary/5 border-primary/20 border-2 animate-in fade-in zoom-in-95">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary flex items-center gap-3">
              <Info /> Kết quả chiến lược
            </CardTitle>
            <CardDescription>{MINIGAME_CHOICES[selectedChoice].title}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground/90 leading-relaxed">
              {MINIGAME_CHOICES[selectedChoice].result}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
