"use client";

import { Sunrise, Sunset } from "lucide-react";

interface SunInfoProps{
astro:{
sunrise:string;
sunset:string;
};
}

export default function SunInfo({
astro
}:SunInfoProps){

return(

<div className="
grid
grid-cols-2
gap-3
mt-5
">

<div className="
bg-white/30
rounded-2xl
p-4
text-center
backdrop-blur-lg
">

<Sunrise
size={28}
className="
mx-auto
text-orange-500
mb-2
"
/>

<p className="
text-xs
text-slate-500
">

Sunrise

</p>

<p className="
font-semibold
text-slate-700
">

{astro.sunrise}

</p>

</div>


<div className="
bg-white/30
rounded-2xl
p-4
text-center
backdrop-blur-lg
">

<Sunset
size={28}
className="
mx-auto
text-indigo-500
mb-2
"
/>

<p className="
text-xs
text-slate-500
">

Sunset

</p>

<p className="
font-semibold
text-slate-700
">

{astro.sunset}

</p>

</div>

</div>

);

}