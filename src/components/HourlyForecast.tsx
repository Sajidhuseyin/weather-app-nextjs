"use client";

interface HourlyForecastProps{
hours:any[];
unit:"C"|"F";
}

function weatherIconUrl(
icon:string
){

return icon.startsWith("//")
?
`https:${icon}`
:
icon;

}

export default function HourlyForecast({
hours,
unit
}:HourlyForecastProps){

return(

<div className="mt-6">

<h3 className="
text-center
text-xs
uppercase
tracking-[0.3em]
text-slate-400
mb-3
">

Hourly Forecast

</h3>

<div className="
flex
gap-3
overflow-x-auto
pb-2
scrollbar-hide
">

{

hours.slice(0,12).map(
(hour,index)=>(

<div

key={index}

className="
min-w-[80px]
bg-white/30
backdrop-blur-lg
rounded-2xl
p-3
text-center
shrink-0
"

>

<p className="
text-xs
text-slate-500
mb-2
">

{

new Date(
hour.time
).toLocaleTimeString(
[],
{
hour:"numeric"
}
)

}

</p>


<img
src={weatherIconUrl(
hour.condition.icon
)}
alt=""
className="
w-10
h-10
mx-auto
"
/>


<p className="
font-semibold
text-slate-700
mt-2
">

{

unit==="C"
?
Math.round(
hour.temp_c
)
:
Math.round(
hour.temp_f
)

}

°

</p>

</div>

)

)

}

</div>

</div>

);

}