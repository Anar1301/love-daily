import { Header } from "@/components/header";
import { DateDisplay } from "@/components/date-display";
import { DailyMessageCard } from "@/components/daily-message-card";
import { FloatingHearts } from "@/components/floating-hearts";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <FloatingHearts />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <Header />

        <div className="w-full max-w-2xl mx-auto mt-8">
          <DateDisplay />
          <DailyMessageCard />
        </div>

        <Footer />
      </div>

      {/* Градиентный фон */}
      <div className="fixed inset-0 -z-10 bg-linear-to-br from-background via-background to-accent/10" />
    </main>
  );
}
