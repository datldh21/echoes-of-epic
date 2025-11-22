import GameChoices from "./_components/game-choices";

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
    </div>
  );
}
