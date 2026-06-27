"use client";

import { useEffect, useState } from "react";

export default function LiveDateTime(){

const [time,setTime]=useState(
new Date()
);

useEffect(()=>{

const interval=
setInterval(()=>{

setTime(
new Date()
);

},1000);

return()=>clearInterval(
interval
);

},[]);

return(

<div className="
text-center
mb-4
">

<p className="
text-sm
text-slate-500
">

{time.toLocaleDateString(
"en-US",
{
weekday:"long",
month:"long",
day:"numeric"
}
)}

</p>

<p className="
text-lg
font-semibold
text-slate-700
">

{time.toLocaleTimeString(
[],
{
hour:"2-digit",
minute:"2-digit"
}
)}

</p>

</div>

);

}