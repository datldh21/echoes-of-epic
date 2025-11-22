import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CHARACTERS } from "@/lib/constants";
import CharacterProfileCard from "./character-profile-card";

export default function MuseumRoom2() {
  return (
    <Card className="bg-card/50 border-0 shadow-none">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl text-primary">Chân dung nhân vật – Profile Sử thi</CardTitle>
        <p className="text-muted-foreground pt-2">Gặp gỡ các nhân vật chính của câu chuyện qua "Facebook cổ đại".</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CHARACTERS.map(character => (
                <CharacterProfileCard key={character.name} character={character} />
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
