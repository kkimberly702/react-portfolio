import React, { useEffect, useState } from 'react';


function WeatherWidget() {
        
        const [weatherCall, setWeatherCall] = useState({});
       
        
        
          useEffect(() => {
            fetch('http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_SECRET_NAME}&q=Las%20Vegas&aqi=no')
            .then((reponse) => reponse.json())
            .then((data) => setWeatherCall(data.current))
            .catch((error) => console.log(error));
          }, [])

          console.log(process.env);
      
        //   console.log(weatherCall);
          
      
  return (
    <div>
        <b>Las Vegas current Weather:</b>
        {/* <h3>Temperature: {weatherCall.temp_f} f</h3>
        <h3>Humidity: {weatherCall.humidity}</h3>
        <h3>Feels like: {weatherCall.feelslike_f} f</h3>
        <h3>Clouds: {weatherCall.cloud}</h3> */}
      
       
        
        
    </div>
  )
}

export default WeatherWidget