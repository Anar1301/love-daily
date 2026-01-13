"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface FloatingHeart {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    // Создаём массив плавающих сердечек
    const heartArray: FloatingHeart[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 5,
    }));
    setHearts(heartArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20 ">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 animate-float "
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          <Heart className="h-6 w-6 text-primary fill-primary " />
        </div>
      ))}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}
