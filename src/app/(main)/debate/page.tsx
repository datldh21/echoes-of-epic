import DebateBoard from "./_components/debate-board";

export default function DebatePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-6xl text-primary">Hội Nghị Thượng Đỉnh</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Chọn một nhân vật, đưa ra lập luận của bạn và thuyết phục những người khác.
        </p>
      </header>

      <main>
        <DebateBoard />
      </main>
    </div>
  );
}
