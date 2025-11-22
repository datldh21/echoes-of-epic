import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MuseumRoom1 from "./_components/museum-room1";
import MuseumRoom2 from "./_components/museum-room2";
import MuseumRoom3 from "./_components/museum-room3";

export default function MuseumPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-6xl text-primary">DẤU ẤN SỬ THI</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Hành trình khám phá thế giới của Iliad qua ba không gian trưng bày.
        </p>
      </header>

      <Tabs defaultValue="room1" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto h-auto sm:h-12">
          <TabsTrigger value="room1" className="py-2.5 text-base">Phòng 1: Chiến trận</TabsTrigger>
          <TabsTrigger value="room2" className="py-2.5 text-base">Phòng 2: Nhân vật</TabsTrigger>
          <TabsTrigger value="room3" className="py-2.5 text-base">Phòng 3: Cảm xúc</TabsTrigger>
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
        </div>
      </Tabs>
    </div>
  )
}
