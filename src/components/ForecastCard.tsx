"use client";

import { motion } from "framer-motion";
import type { ForecastDay, TempUnit } from "../types/weather";

interface Props {
  day: ForecastDay;
  unit: TempUnit;
  index: number;
}

function weatherIconUrl(icon: string): string {
  return icon.startsWith("//") ? `https:${icon}` : icon;
}

export default function ForecastCard({ day, unit, index }: Props) {
  const maxTemp = unit === "C" ? day.day.maxtemp_c : day.day.maxtemp_f;
  const minTemp = unit === "C" ? day.day.mintemp_c : day.day.mintemp_f;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="rounded-xl p-2.5 text-center cursor-default bg-white/35 border border-white/50"
    >
      <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500">
        {new Date(day.date).toLocaleDateString("en-US", { weekday: "short" })}
      </p>

      <img
        src={weatherIconUrl(day.day.condition.icon)}
        alt={day.day.condition.text}
        className="mx-auto w-9 h-9 my-1 drop-shadow-sm"
      />

      <div className="flex items-center justify-center gap-1.5">
        <span className="font-bold text-slate-800 text-sm">{Math.round(maxTemp)}°</span>
        <span className="text-slate-400 text-xs">{Math.round(minTemp)}°</span>
      </div>
    </motion.div>
  );
}
