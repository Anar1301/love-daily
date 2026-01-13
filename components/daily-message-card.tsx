"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getDailyMessage, type DailyMessage } from "@/lib/messages";
import { Heart } from "lucide-react";

export function DailyMessageCard() {
  const [message, setMessage] = useState<DailyMessage | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Получаем сообщение дня
    const dailyMessage = getDailyMessage();
    setMessage(dailyMessage);

    // Анимация появления
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  if (!message) {
    return null;
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "quote":
        return "Цитата";
      case "poem":
        return "Стихи";
      case "anecdote":
        return "История";
      case "compliment":
        return "Комплимент";
      default:
        return "Послание";
    }
  };

  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm shadow-xl">
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="h-5 w-5 text-primary fill-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              {getTypeLabel(message.type)}
            </span>
            <Heart className="h-5 w-5 text-primary fill-primary animate-pulse" />
          </div>
          <div className="text-6xl mb-2 animate-bounce-slow">
            {message.emoji}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed text-center text-foreground font-medium text-balance">
            {message.text}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
