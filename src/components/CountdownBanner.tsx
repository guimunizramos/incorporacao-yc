import { useEffect, useMemo, useState } from "react";

const EVENT_TIMESTAMP = new Date("2026-07-16T20:00:00-03:00").getTime();

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

  return (
    <div className="fixed left-0 right-0 top-0 z-50 bg-primary/95 text-white shadow-md backdrop-blur-sm">
      <div className="container mx-auto flex min-h-[64px] flex-row flex-wrap items-center justify-center gap-x-3 gap-y-1.5 px-3 py-2 text-center md:min-h-[56px] md:flex-nowrap md:gap-4">
        <p className="text-[10px] font-semibold uppercase tracking-wide sm:text-xs md:text-sm">
          {hasStarted ? "A consultoria já começou!" : "Consultoria gratuita ao vivo em:"}
        </p>

        {!hasStarted && (
          <div className="grid grid-cols-4 gap-1 sm:gap-1.5" aria-label="Contagem regressiva para 01/07/2026 às 20h, horário de Brasília">
            {[
              [countdown.days, "Dias"],
              [countdown.hours, "Horas"],
              [countdown.minutes, "Min"],
              [countdown.seconds, "Seg"],
            ].map(([value, label]) => (
              <div key={label} className="min-w-[42px] rounded bg-black/15 px-1.5 py-1 leading-none md:min-w-[52px] md:px-2">
                <span className="block text-sm font-extrabold sm:text-base md:text-xl">{formatTimeUnit(Number(value))}</span>
                <span className="block text-[8px] font-semibold uppercase md:text-[10px]">{label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CountdownBanner;
