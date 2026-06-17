import { useEffect, useMemo, useState } from "react";
import { Button } from "./ui/button";

const EVENT_TIMESTAMP = new Date("2026-07-01T20:00:00-03:00").getTime();

const getTimeLeft = () => Math.max(EVENT_TIMESTAMP - Date.now(), 0);

const formatTimeUnit = (value: number) => String(value).padStart(2, "0");

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const countdown = useMemo(() => {
    const totalSeconds = Math.floor(timeLeft / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  }, [timeLeft]);

  const hasStarted = timeLeft <= 0;

  const scrollToForm = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed left-0 right-0 top-0 z-50 bg-primary text-white shadow-lg">
      <div className="container mx-auto flex min-h-[92px] flex-col items-center justify-center gap-2 px-4 py-3 text-center md:min-h-[64px] md:flex-row md:gap-5 md:py-2">
        <p className="text-sm font-semibold uppercase tracking-wide md:text-base">
          {hasStarted ? "A consultoria já começou!" : "Consultoria gratuita ao vivo em:"}
        </p>

        {!hasStarted && (
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2" aria-label="Contagem regressiva para 01/07/2026 às 20h, horário de Brasília">
            {[
              [countdown.days, "Dias"],
              [countdown.hours, "Horas"],
              [countdown.minutes, "Min"],
              [countdown.seconds, "Seg"],
            ].map(([value, label]) => (
              <div key={label} className="min-w-[54px] rounded-md bg-black/20 px-2 py-1 leading-none md:min-w-[62px]">
                <span className="block text-lg font-extrabold md:text-2xl">{formatTimeUnit(Number(value))}</span>
                <span className="block text-[10px] font-semibold uppercase md:text-[11px]">{label}</span>
              </div>
            ))}
          </div>
        )}

        <Button
          type="button"
          onClick={scrollToForm}
          className="h-9 w-full max-w-[260px] bg-white px-4 text-xs font-extrabold text-primary hover:bg-white/90 sm:w-auto md:h-10 md:text-sm"
        >
          {hasStarted ? "ENTRAR AGORA" : "GARANTIR MINHA VAGA"}
        </Button>
      </div>
    </div>
  );
};

export default CountdownBanner;
