"use client";

import { Search } from "lucide-react";

interface Props {
  city: string;
  setCity: (city: string) => void;
  onSearch: () => void;
  disabled?: boolean;
}

export default function SearchBar({ city, setCity, onSearch, disabled }: Props) {
  return (
    <div className="relative w-full mx-auto mb-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearch();
        }}
        placeholder="Search any city..."
        disabled={disabled}
        className="
          w-full py-3 px-14 rounded-2xl
          bg-white/50 backdrop-blur-xl
          border border-white/60
          text-center text-slate-800 placeholder:text-slate-400
          outline-none
          focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20
          transition-all
          disabled:opacity-50
        "
      />

  <button
onClick={onSearch}

className="
absolute
right-5
top-1/2
-transform
-translate-y-1/2
text-slate-500
hover:text-sky-600
hover:scale-125
transition-all
duration-300
cursor-pointer"
>

<Search size={20}/>

</button>
    </div>
  );
}
