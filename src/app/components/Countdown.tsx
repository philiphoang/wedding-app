"use client";

import { useState, useEffect } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-03-28T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      if (targetDate <= now) {
        clearInterval(timer);
        setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Calculate months difference
      let months =
        targetDate.getMonth() -
        now.getMonth() +
        12 * (targetDate.getFullYear() - now.getFullYear());

      // Calculate the "month boundary"
      const monthBoundary = new Date(
        now.getFullYear(),
        now.getMonth() + months,
        targetDate.getDate(),
        targetDate.getHours(),
        targetDate.getMinutes(),
        targetDate.getSeconds()
      );

      // If we've overshot, subtract one month and adjust
      if (monthBoundary > targetDate) {
        months--;
      }

      // Days left after subtracting full months
      const afterMonths = new Date(
        now.getFullYear(),
        now.getMonth() + months,
        now.getDate()
      );

      const diffMs = targetDate.getTime() - now.getTime();

      const days = Math.floor(
        (targetDate.getTime() -
          new Date(now.getFullYear(), now.getMonth() + months, now.getDate()).getTime()) /
          (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
      const seconds = Math.floor((diffMs / 1000) % 60);

      setTimeLeft({ months, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-bg py-12 px-6 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Countdown to Our Wedding
        </h2>
        <div className="flex justify-center gap-6 text-2xl md:text-3xl font-semibold flex-wrap">
          <div className="bg-white shadow-md rounded-lg p-4">
            {timeLeft.months}{" "}
            <span className="block text-sm font-normal">Months</span>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            {timeLeft.days}{" "}
            <span className="block text-sm font-normal">Days</span>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            {timeLeft.hours}{" "}
            <span className="block text-sm font-normal">Hours</span>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            {timeLeft.minutes}{" "}
            <span className="block text-sm font-normal">Minutes</span>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            {timeLeft.seconds}{" "}
            <span className="block text-sm font-normal">Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
}
