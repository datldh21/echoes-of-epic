import DebateBoard from "./_components/debate-board";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DebatePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-6xl text-primary">DIỄN ĐÀN ĐỐI THOẠI</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Tại đây, bạn sẽ nhập vai các nhân vật, đưa ra những lập luận sắc bén để bảo vệ cho quyết định của mình trong tình huống éo le nhất: "Giữa Trái tim và Trách nhiệm"
        </p>
      </header>

      <main>
        <DebateBoard />
      </main>

      <section className="mt-24 text-center">
        <h3 className="font-headline text-3xl text-primary flex items-center justify-center gap-3">
          Thử tài tri thức
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Bạn có đủ mưu lược để bảo vệ thành Troy? Hãy thử tài làm người lãnh đạo.
        </p>
        <Button asChild size="lg" className="mt-8 group bg-primary hover:bg-primary/90">
          <Link href="/minigame">
            Khám phá Góc tri thức
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
