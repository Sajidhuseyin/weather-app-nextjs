 "use client";

interface WeatherBackgroundProps{
condition?:string;
}

export default function WeatherBackground({
condition=""
}:WeatherBackgroundProps){

const weather=
condition.toLowerCase();

let bg="";

if(
weather.includes("sun") ||
weather.includes("clear")
){

bg=
"bg-gradient-to-br from-sky-300 via-orange-200 to-yellow-100";

}

else if(
weather.includes("rain")
){

bg=
"bg-gradient-to-br from-slate-900 via-blue-900 to-slate-700";

}

else if(
weather.includes("cloud")
){

bg=
"bg-gradient-to-br from-slate-400 via-slate-500 to-slate-700";

}

else if(
weather.includes("snow")
){

bg=
"bg-gradient-to-br from-cyan-100 via-blue-100 to-slate-200";

}

else if(
weather.includes("mist") ||
weather.includes("fog")
){

bg=
"bg-gradient-to-br from-gray-300 via-slate-400 to-gray-500";

}

else{

bg=
"bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-700";

}


return(

<div
className={`
fixed
inset-0
${bg}
transition-all
duration-[1500ms]
overflow-hidden
`}
>

{/* floating circles */}

<div className="
absolute
top-20
left-10
w-72
h-72
rounded-full
bg-white/10
blur-3xl
animate-pulse
"/>

<div className="
absolute
bottom-10
right-10
w-96
h-96
rounded-full
bg-white/10
blur-3xl
animate-pulse
"/>

</div>

);

}