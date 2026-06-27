 export type TempUnit = "C" | "F";

export interface CurrentWeather {
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
}

export interface ForecastDay {
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

export interface WeatherData {

  location:{
    name:string;
    country:string;
  };

  current: CurrentWeather;

  forecast:{
    forecastday: ForecastDay[];
  };

}