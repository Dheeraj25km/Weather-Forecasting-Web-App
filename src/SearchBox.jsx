import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import "./serachbox.css";


export default function SearchBox({updateInfo}){
 
    let[city, setCity] = useState("");
    const API_URL =  "https://api.openweathermap.org/data/2.5/weather";
    const API_key = "3ef21e7176c68b54e117f8a8c65dad2b";

    let getWethInfo = async()=>{
        // try{
      let response=  await fetch(`${API_URL}?q=${city}&appid=${API_key}&units=metric`)
     let jsonResp= await response.json();
     console.log(jsonResp);
     let result={
        city:city,
        temp : jsonResp.main.temp,
       
        tempMin :jsonResp.main.temp_min,
        tempMax :jsonResp.main.temp_max,
        humidity:jsonResp.main.humidity,
        weather: jsonResp.weather[0].description,
        feelsLike:jsonResp.main.feels_like
     };
     console.log(result);
    // updateInfo(result)
      return result;
        
    //  } catch (error) {
    //     console.error("Error fetching weather information:", error);
    //     // Handle error if needed
    
    // }
     }
    
    
    let Changehandle=(event)=>{
        setCity(event.target.value)
    }

    let handlSubmit = async(event)=>{
        event.preventDefault();
        console.log(city)
        
       let newInfo= await getWethInfo();
       updateInfo(newInfo);
       setCity("");
    //    getWethInfo()
    }
  

    return(
        <div className='searchbox'>
      
        
      
         <form onSubmit={handlSubmit}>
        
        <TextField id="city" label="City Name" variant="outlined" required onChange={Changehandle}/>
         <br></br> <br></br>
        <Button variant="contained" type='submit' >Search</Button>
        </form>
        </div>
    )
}