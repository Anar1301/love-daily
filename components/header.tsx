import { Heart } from "lucide-react";

export function Header() {
  return (
    <header className="w-full py-6 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Heart className="h-8 w-8 text-primary fill-primary animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Мои слова тебе
          </h1>
          <Heart className="h-8 w-8 text-primary fill-primary animate-pulse" />
        </div>
        <p className="text-muted-foreground text-lg">
          Каждый день новое послание любви
        </p>
      </div>
    </header>
  );
}
