export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-8 gap-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-sky-200" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-sky-500 animate-spin" />
      </div>
      <p className="text-xs text-slate-500 tracking-wide animate-pulse">
        Fetching weather...
      </p>
    </div>
  );
}
