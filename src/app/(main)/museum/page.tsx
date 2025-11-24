import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MuseumRoom1 from "./_components/museum-room1";
import MuseumRoom2 from "./_components/museum-room2";
import MuseumRoom3 from "./_components/museum-room3";
import MuseumRoom4 from "./_components/museum-room4";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Mic } from "lucide-react";

export default function MuseumPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-6xl text-primary">DẤU ẤN SỬ THI</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Hành trình khám phá thế giới của Iliad qua bốn không gian trưng bày.
        </p>
      </header>

      <Tabs defaultValue="room1" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 max-w-3xl mx-auto h-auto sm:h-12">
          <TabsTrigger value="room1" className="py-2.5 text-base">Phòng 1: Chiến trận</TabsTrigger>
          <TabsTrigger value="room2" className="py-2.5 text-base">Phòng 2: Nhân vật</TabsTrigger>
          <TabsTrigger value="room3" className="py-2.5 text-base">Phòng 3: Cảm xúc</TabsTrigger>
          <TabsTrigger value="room4" className="py-2.5 text-base">Phòng 4: Hiện vật</TabsTrigger>
        </TabsList>

        <div className="mt-8">
          <TabsContent value="room1">
            <MuseumRoom1 />
          </TabsContent>
          <TabsContent value="room2">
            <MuseumRoom2 />
          </TabsContent>
          <TabsContent value="room3">
            <MuseumRoom3 />
          </TabsContent>
          <TabsContent value="room4">
            <MuseumRoom4 />
          </TabsContent>
        </div>
      </Tabs>

      <section className="mt-24 text-center">
          <h3 className="font-headline text-3xl text-primary flex items-center justify-center gap-3">
            <Mic /> Lắng nghe tâm tư
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Khám phá những câu chuyện và góc nhìn sâu sắc hơn qua các tập Podcast đặc biệt của chúng tôi.
          </p>
          <Button asChild size="lg" className="mt-8 group bg-primary hover:bg-primary/90">
            <Link href="/podcast">
              Khám phá Podcast
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </section>
    </div>
  )
}

    