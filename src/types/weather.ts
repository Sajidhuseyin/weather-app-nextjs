 export type TempUnit = "C" | "F";

export interface WeatherData {

location:{
name:string;
country:string;
};

current:{

temp_c:number;
temp_f:number;

humidity:number;

wind_kph:number;

feelslike_c:number;
feelslike_f:number;

condition:{
text:string;
icon:string;
};

};

forecast:{

forecastday:[

{

date:string;

day:{

maxtemp_c:number;
maxtemp_f:number;

mintemp_c:number;
mintemp_f:number;

condition:{

text:string;
icon:string;

};

};

astro:{

sunrise:string;
sunset:string;

};

hour:{

time:string;

temp_c:number;
temp_f:number;

condition:{

text:string;
icon:string;

};

}[];

}

];

};

}