"use client";

import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

export function DateDisplay() {
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const formatDate = () => {
      const date = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return date.toLocaleDateString("ru-RU", options);
    };

    setCurrentDate(formatDate());
  }, []);

  if (!currentDate) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
      <Calendar className="h-5 w-5" />
      <time className="text-sm font-medium capitalize">{currentDate}</time>
    </div>
  );
}
