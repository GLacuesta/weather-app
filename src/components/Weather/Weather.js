import React from 'react';

import classes from './Weather.module.css';

import WeatherPerDay from './WeatherPerDay/WeatherPerDay';

const weather = (props) => {

    let weather = null, count = 0;
    if (props.weather.consolidated_weather) {
        
        //remove this if block for dynamic length or not enforcing 5 based in specs
        if (props.weather.consolidated_weather.length > 5) {
            props.weather.consolidated_weather.length = 5;
        }

        weather = props.weather.consolidated_weather.map(w => {
            return <WeatherPerDay 
                        key={w.id}
                        name={w.weather_state_name}
                        img={props.img + w.weather_state_abbr + '.svg'}
                        min={w.min_temp} 
                        max={w.max_temp} 
                        date={w.applicable_date}/>
        });
        
        count = props.weather.consolidated_weather.length;
    }

    return (
        <div>
            <div>
                <button onClick={props.clicked}>BACK TO LOCATIONS</button>
                <h3>{count} day forecast for {props.weather.title}</h3>
            </div>
            <div className={classes.Weather}>
                {weather}
            </div>
        </div>
    );
}

export default weather;