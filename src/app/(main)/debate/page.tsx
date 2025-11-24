import DebateBoard from "./_components/debate-board";

export default function DebatePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-6xl text-primary">HỘI NGHỊ ĐỈNH CAO ILIAD</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Tại đây, bạn sẽ nhập vai các nhân vật, đưa ra những lập luận sắc bén để bảo vệ cho quyết định của mình trong tình huống éo le nhất: "Giữa Trái tim và Trách nhiệm"
        </p>
      </header>

      <main>
        <DebateBoard />
      </main>
    </div>
  );
}
