import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-8 px-4 mt-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <span>Сделано с</span>
          <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />
          <span>специально для тебя</span>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Новое послание появляется каждый день
        </p>
      </div>
    </footer>
  );
}
