import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Target date for the countdown — change this to your special date

const TARGET_DATE = new Date("2026-03-08T00:00:00");
const CountdownPage = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const target = TARGET_DATE.getTime();
      const diff = target - now;

      if (diff <= 0) {
        setIsComplete(true);
        navigate("/celebration");
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [navigate]);

  if (isComplete) return null;

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-romantic-gradient px-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-2 font-display text-4xl font-bold text-gradient-romantic md:text-6xl"
      >
        Counting Down to Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mb-12 font-body text-lg text-muted-foreground md:text-xl"
      >
        Every second brings us closer…
      </motion.p>

      <div className="flex gap-4 md:gap-8">
        {units.map((unit, i) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 * i, duration: 0.5 }}
            className="flex flex-col items-center rounded-2xl bg-card px-4 py-6 shadow-lg md:px-8 md:py-10 animate-pulse-glow"
          >
            <span className="font-display text-4xl font-bold text-primary md:text-6xl">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="mt-2 text-sm text-muted-foreground md:text-base">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>

=======
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => navigate("/celebration")}
        className="mt-12 rounded-full bg-primary px-8 py-3 font-display text-lg text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        Skip to Celebration →
      </motion.button>
    </div>
  );
};

export default CountdownPage;
