import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./Topdiv.css"

export default function WeatherApp(){
    let [weather, setWeather] = useState({
        city:"Delhi",
        feelsLike :  22.22,
        humidity: 73,
        temp: 22.05,
        tempMax:  22.05, 
        tempMin: 22.05,
        weather :  "haze"
    })

    let updateInfo=(result)=>{
        setWeather(result);
    }
return(
    <div className="Topdiv">
         <h2 style={{color: 'white'}}>Weather App</h2>
         <SearchBox updateInfo={updateInfo}  />
         <InfoBox info={weather}/>
    </div>
)
}