 "use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloudSun, MapPin, AlertCircle } from "lucide-react";

import SearchBar from "./SearchBar";
import Loader from "./Loader";
import ForecastCard from "./ForecastCard";
import WeatherInfo from "./WeatherInfo";
import WeatherBackground from "./WeatherBackground";
import RecentSearches from "./RecentSearches";
import LiveDateTime from "./LiveDateTime";
import SunInfo from "./SunInfo";
import HourlyForecast from "./HourlyForecast";

import type { TempUnit, WeatherData } from "../types/weather";

function weatherIconUrl(icon:string){

return icon.startsWith("//")
?
`https:${icon}`
:
icon;

}

export default function WeatherCard(){

const [city,setCity]=useState("");
const [weather,setWeather]=useState<WeatherData | null>(null);
const [loading,setLoading]=useState(true);
const [error,setError]=useState("");
const [unit,setUnit]=useState<TempUnit>("C");

const apiKey=
process.env.NEXT_PUBLIC_WEATHER_API_KEY;


const fetchWeather=useCallback(

async(query:string)=>{

if(!apiKey){

setError(
"API key missing"
);

setLoading(false);

return;

}

try{

setLoading(true);
setError("");

const response=
await fetch(

`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(query)}&days=3`

);

const data=
await response.json();

if(data.error){

setError(
data.error.message
);

setWeather(null);

return;

}

setWeather(data);

}
catch{

setError(
"Unable to fetch weather"
);

setWeather(null);

}
finally{

setLoading(false);

}

},

[apiKey]

);


const handleSearch=async()=>{

if(!city.trim()) return;

await fetchWeather(
city.trim()
);

setCity("");

};


useEffect(()=>{

if(!navigator.geolocation){

fetchWeather(
"Rawalpindi"
);

return;

}

navigator.geolocation.getCurrentPosition(

(position)=>{

fetchWeather(

`${position.coords.latitude},${position.coords.longitude}`

);

},

()=>{

fetchWeather(
"Rawalpindi"
);

}

);

},[fetchWeather]);


const temp=
weather
?
unit==="C"
?
weather.current.temp_c
:
weather.current.temp_f
:
null;


return(

<>

<WeatherBackground
condition={
weather?.current?.condition?.text
}
/>

<main className="
relative
z-10
min-h-screen
flex
items-center
justify-center
p-4
">

<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

className="
w-full
max-w-md
glass-panel
rounded-[30px]
px-6
pt-20
pb-6
relative
overflow-hidden
"

>

<header className="
text-center
mb-5
">

<div className="
inline-flex
items-center
gap-2
">

<CloudSun
size={28}
className="
text-yellow-400
"
/>

<h1 className="
text-2xl
font-bold
">

WeatherNow

</h1>

</div>

<p className="
text-xs
text-slate-500
mt-1
">

Real-time weather forecast

</p>

</header>


<LiveDateTime/>


<SearchBar
city={city}
setCity={setCity}
onSearch={handleSearch}
disabled={loading}
/>


<RecentSearches

currentCity={
weather?.location?.name || ""
}

onSelect={(city)=>{

fetchWeather(city);

}}

 />


<AnimatePresence mode="wait">

{loading && (

<Loader/>

)}


{error && !loading && (

<div className="
flex
gap-2
items-center
justify-center
text-red-500
mt-4
">

<AlertCircle size={18}/>

{error}

</div>

)}


{weather && !loading && (

<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

>

<div className="
flex
justify-center
gap-2
mb-5
">

{(["C","F"] as TempUnit[]).map(
(u)=>(

<button

key={u}

onClick={()=>
setUnit(u)
}

className={`

px-4
py-1
rounded-full

${
unit===u
?
"bg-sky-500 text-white"
:
"bg-white/40"
}

`}

>

°{u}

</button>

)

)}

</div>


<div className="text-center">

<img

src={weatherIconUrl(
weather.current.condition.icon
)}

alt=""

className="
mx-auto
w-24
h-24
"

/>

<p className="
text-6xl
font-bold
">

{Math.round(temp!)}

°

</p>

<p className="
text-lg
">

{
weather.current.condition.text
}

</p>

<p className="
flex
justify-center
items-center
gap-1
text-sm
text-slate-500
">

<MapPin size={14}/>

{
weather.location.name
}

,
{" "}

{
weather.location.country
}

</p>

</div>


<WeatherInfo
current={weather.current}
unit={unit}
/>


<SunInfo

astro={
weather.forecast.forecastday[0].astro
}

/>


<HourlyForecast

hours={
weather.forecast.forecastday[0].hour
}

unit={unit}

/>


<div className="
mt-6
">

<h3 className="
text-center
text-xs
uppercase
tracking-widest
mb-3
text-slate-500
">

3 Day Forecast

</h3>

<div className="
grid
grid-cols-3
gap-2
">

{
weather.forecast.forecastday.map(
(day,index)=>(

<ForecastCard

key={day.date}

day={day}
unit={unit}
index={index}

/>

)
)
}

</div>

</div>

</motion.div>

)}

</AnimatePresence>

</motion.div>

</main>

</>

);

}