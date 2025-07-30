import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentMonth = now.getMonth();
      const currentYear = now.getFullYear();

      // Calcular el primer día del siguiente mes
      const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
      const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
      const nextMonthDate = new Date(nextYear, nextMonth, 1);

      const difference = nextMonthDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    // Calcular inmediatamente
    calculateTimeLeft();

    // Actualizar cada segundo
    const timer = setInterval(calculateTimeLeft, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(timer);
  }, []);

  // Formatear números con ceros a la izquierda
  const formatNumber = (num) => num.toString().padStart(2, "0");

  return (
    <div className="inline-flex items-center gap-2 w-auto sm:w-auto px-6 py-3 bg-transparent text-white border border-white text-sm sm:text-base md:text-lg font-semibold rounded-lg transition duration-300 shadow-md hover:shadow-lg">
      {formatNumber(timeLeft.days)} : {formatNumber(timeLeft.hours)} :{" "}
      {formatNumber(timeLeft.minutes)} : {formatNumber(timeLeft.seconds)}
    </div>
  );
}
