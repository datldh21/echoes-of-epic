import GameChoices from "./_components/game-choices";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MinigamePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-6xl text-primary tracking-wider">BẢO VỆ TROY</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Bạn là người lãnh đạo của Troy. Tình thế ngàn cân treo sợi tóc. Hãy chọn chiến lược của mình.
        </p>
      </header>

      <main>
        <GameChoices />
      </main>

      <section className="mt-24 text-center">
        <h3 className="font-headline text-3xl text-primary flex items-center justify-center gap-3">
          Nhịp cầu thời gian
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Soi chiếu những giá trị vĩnh cửu của sử thi vào cuộc sống hiện đại và suy ngẫm về hình mẫu anh hùng.
        </p>
        <Button asChild size="lg" className="mt-8 group bg-primary hover:bg-primary/90">
          <Link href="/legacy">
            Khám phá Nhịp cầu thời gian
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
