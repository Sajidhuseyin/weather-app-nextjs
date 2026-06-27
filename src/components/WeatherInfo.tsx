import { Droplets, Gauge, Sun, Wind } from "lucide-react";
import type { CurrentWeather, TempUnit } from "../types/weather";

interface Props {
  current: CurrentWeather;
  unit: TempUnit;
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl p-2.5 flex flex-col items-center gap-1 bg-white/35 border border-white/50 hover:bg-white/45 transition-colors">
      <div className="text-sky-600">{icon}</div>
      <span className="text-[10px] uppercase tracking-wider text-slate-500">{label}</span>
      <span className="text-sm font-semibold text-slate-800">{value}</span>
    </div>
  );
}

export default function WeatherInfo({ current, unit }: Props) {
  const feelsLike = unit === "C" ? current.feelslike_c : current.feelslike_f;
  const wind = unit === "C" ? current.wind_kph : current.wind_mph;
  const windUnit = unit === "C" ? "km/h" : "mph";

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
      <Stat
        icon={<Droplets size={16} />}
        label="Humidity"
        value={`${current.humidity}%`}
      />
      <Stat
        icon={<Wind size={16} />}
        label="Wind"
        value={`${Math.round(wind)} ${windUnit}`}
      />
      <Stat
        icon={<Gauge size={16} />}
        label="Pressure"
        value={`${current.pressure_mb} mb`}
      />
      <Stat
        icon={<Sun size={16} />}
        label="Feels like"
        value={`${Math.round(feelsLike)}°${unit}`}
      />
    </div>
  );
}
