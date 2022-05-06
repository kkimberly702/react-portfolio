// require('dotenv').config()
import React, { useEffect, useState } from 'react';




function WeatherWidget() {
        
        const [weatherCall, setWeatherCall] = useState({});
       
        
          useEffect(() => {
            fetch('https://api.weatherapi.com/v1/current.json?key='+`${process.env.REACT_APP_SECRET_NAME}`+'&q=Las%20Vegas&aqi=no')
            .then((reponse) => reponse.json())
            .then((data) => setWeatherCall(data.current))
            .catch((error) => console.log(error));
          }, [])

          // console.log(process.env);
      
        // console.log(weatherCall);
          
      
  return (
    <div className='weather'>
        <b>Las Vegas current Weather:</b>
        <h4>Temperature: {weatherCall.temp_f} f</h4>
        <h4>Humidity: {weatherCall.humidity}</h4>
        <h4>Feels like: {weatherCall.feelslike_f} f</h4>
        <h4>Clouds: {weatherCall.cloud}</h4>
      
       
        
        
    </div>
  )
}





export default WeatherWidget

