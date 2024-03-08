
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from "@mui/material/Typography";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from '@mui/icons-material/AcUnit';
 import "./infobox.css"

export default function InfoBox({info}){
    // let IMG_URL="https://images.unsplash.com/photo-1622336707998-fa47a2594145?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let cold_URL="https://images.unsplash.com/photo-1613416721396-6565d7b3dcb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  let hot_url="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let rainy ="https://images.unsplash.com/photo-1438449805896-28a666819a20?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    return(
        <div className="infobox">
            <div className="card">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rainy: info.temp<15?cold_URL:hot_url}
        title="green iguana"
      />
      <CardContent style={{ backgroundColor: '#90a4b7' }}>
        <Typography gutterBottom variant="h5" component="div">
          <div>
          {info.city}&nbsp;&nbsp;
        {info.humidity > 80 ? <ThunderstormIcon /> : info.temp < 15 ? <AcUnitIcon /> : <WbSunnyIcon />}
          </div>
         
        </Typography>
    
        <Typography variant="body2" color="text.secondary" component={"span"} style={{fontWeight:'700'}} >
        
       
         <p>Temprature={info.temp}&deg;</p>
         <p>Humdity={info.humidity}</p>
         <p>Min tem ={info.tempMin}</p>
         <p>Max tem ={info.tempMax}</p>
         <p>the weather can be describe  <b>{info.weather}</b> and feels like <b>{info.feelsLike}</b></p>
         
        </Typography>
      </CardContent>
     
    </Card>
    </div>

        </div>
    )
}