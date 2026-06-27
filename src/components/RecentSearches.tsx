"use client";

import { useEffect, useState } from "react";

interface RecentSearchesProps{
onSelect:(city:string)=>void;
currentCity:string;
}

export default function RecentSearches({
onSelect,
currentCity
}:RecentSearchesProps){

const [cities,setCities]=useState<
string[]
>([]);


useEffect(()=>{

const saved=
localStorage.getItem(
"recentCities"
);

if(saved){

setCities(
JSON.parse(saved)
);

}

},[]);


useEffect(()=>{

if(!currentCity) return;

const updated=[

currentCity,

...cities.filter(
(c)=>c!==currentCity
)

].slice(0,5);


setCities(updated);

localStorage.setItem(
"recentCities",
JSON.stringify(updated)
);

},[currentCity]);


if(cities.length===0){

return null;

}


return(

<div className="
mt-4
mb-4
">

<p className="
text-xs
text-slate-400
mb-2
text-center
">

Recent Searches

</p>


<div className="
flex
justify-center
gap-2
flex-wrap
">

{cities.map((city)=>(

<button

key={city}

onClick={()=>
onSelect(city)
}

className="
px-3
py-1
rounded-full
bg-white/40
hover:bg-sky-500
hover:text-white
text-xs
transition-all
"

>

{city}

</button>

))}

</div>

</div>

);

}