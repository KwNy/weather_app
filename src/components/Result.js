import React from 'react';
import './Result.css'

// import './Form.css';

const Result = props => {
const {err, city, date,sunrise, sunset, temp, pressure, wind,description, icon, img} = props.weather 
let content = null;

if(!err && city){
    //sunrise without miliseconds -> change it 
    const sunriseTime = new Date(sunrise * 1000).toLocaleString();
    const sunsetTime = new Date(sunset * 1000).toLocaleString();
    content = (
        <div> 
            <h2><em>{city}</em></h2>
            <h4>Current temperature: {Math.floor(temp)} &#176;C</h4>
            <h4>{description}</h4>

            {/* <h4>Date and time: {date}</h4>
            <h4>Current temperature: {temp} &#176;C</h4>
            <h4>Sunrise: {sunriseTime}</h4>
            <h4>Sunset: {sunsetTime}</h4>
            <h4>Pressure: {pressure} hPa</h4>
            <h4>Wind: {wind} m/s</h4> */}
        </div>
    )
}



return (
        <div className="Result">
            {err ? `${city} not available` 
            :content}
        </div>


  );
}

export default Result;
