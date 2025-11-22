import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PODCASTS } from "@/lib/constants";
import PodcastCard from "./_components/podcast-card";

export default function PodcastPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-6xl text-primary">Góc Chia Sẻ</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Lắng nghe những tâm tư, suy ngẫm từ các nhân vật trong câu chuyện và cả người kể chuyện.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {PODCASTS.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} />
        ))}
      </div>
    </div>
  );
}
