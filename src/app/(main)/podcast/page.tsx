import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PODCASTS } from "@/lib/constants";
import PodcastCard from "./_components/podcast-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Wand2 } from "lucide-react";

export default function PodcastPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-6xl text-primary">Góc Chia Sẻ</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Lắng nghe những tâm tư, suy ngẫm từ các nhân vật trong câu chuyện và cả người kể chuyện.
        </p>
      </header>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PODCASTS.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>

        <section className="mt-24 text-center">
            <h3 className="font-headline text-3xl text-primary flex items-center justify-center gap-3">
              Không gian triển lãm
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Những tác phẩm nghệ thuật độc đáo lấy cảm hứng từ câu chuyện sử thi.
            </p>
            <Button asChild size="lg" className="mt-8 group bg-primary hover:bg-primary/90">
              <Link href="/gallery">
                Khám phá Xưởng sáng tạo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </section>
      </main>
    </div>
  );
}
