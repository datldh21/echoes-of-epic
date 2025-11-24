'use client'

import { useState, useTransition } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { generateIliadArtwork } from '@/ai/flows/generate-iliad-artwork';
import { Loader2, Sparkles, Wand2, Image as ImageIcon } from 'lucide-react';

const examplePrompts = [
    "Hector tháo chiếc mũ trụ sáng loáng cho con trai Astyanax đỡ sợ.",
    "Khoảnh khắc Hector và Andromache chia biệt ở cổng thành Scaean.",
    "Achilles giận dữ kéo lê xác Hector quanh thành Troy.",
]

export default function ArtGenerator() {
    const { toast } = useToast();
    const [isPending, startTransition] = useTransition();
    const [prompt, setPrompt] = useState('');
    const [generatedArt, setGeneratedArt] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!prompt) {
            toast({
                variant: "destructive",
                title: "Vui lòng nhập mô tả",
                description: "Bạn cần mô tả một cảnh để AI có thể vẽ.",
            });
            return;
        }
        setGeneratedArt(null);

        startTransition(async () => {
            const result = await generateIliadArtwork({ sceneDescription: prompt });
            if (result.artworkDataUri) {
                setGeneratedArt(result.artworkDataUri);
                toast({
                    title: "Tạo tranh thành công!",
                    description: "Tác phẩm nghệ thuật của bạn đã sẵn sàng.",
                });
            } else {
                toast({
                    variant: "destructive",
                    title: "Tạo tranh thất bại",
                    description: "Đã có lỗi xảy ra. Vui lòng thử lại.",
                });
            }
        });
    };
    
    return (
        <Card className="max-w-4xl mx-auto bg-card/50">
            <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl text-primary flex items-center justify-center gap-3">
                    <Wand2 /> Họa Sĩ AI
                </CardTitle>
                <CardDescription>
                    Mô tả một cảnh trong Iliad, và AI sẽ vẽ nó cho bạn.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="scene-description" className="block text-sm font-medium mb-2 text-foreground/80">
                                Mô tả cảnh
                            </label>
                            <Textarea
                                id="scene-description"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="VD: Hector tháo mũ trụ cho con trai..."
                                rows={5}
                            />
                        </div>
                        <Button type="submit" disabled={isPending || !prompt} className="w-full">
                           {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                           {isPending ? 'Đang vẽ...' : 'Vẽ tranh'}
                       </Button>
                    </form>

                    <div className="flex flex-col items-center justify-center border border-dashed rounded-lg p-4 bg-background/50 min-h-[250px]">
                        {isPending ? (
                             <div className="w-full aspect-video flex flex-col items-center justify-center">
                                <Loader2 className="w-10 h-10 text-primary animate-spin" />
                                <p className="mt-4 text-muted-foreground">AI đang phác họa ý tưởng của bạn...</p>
                             </div>
                        ) : generatedArt ? (
                            <Image
                                src={generatedArt}
                                alt="AI generated artwork"
                                width={500}
                                height={350}
                                className="rounded-md object-contain"
                            />
                        ) : (
                            <div className="text-center text-muted-foreground">
                                <ImageIcon className="mx-auto h-12 w-12" />
                                <p className="mt-2 font-semibold">Tác phẩm của bạn</p>
                                <p className="mt-1 text-sm">Bức tranh bạn tạo sẽ xuất hiện ở đây.</p>
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
