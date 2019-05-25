import React from 'react';

import classes from './WeatherPerDay.module.css';

const weatherPerDay = (props) => {
    return (
        <div className={classes.WeatherPerDay}>
            <div>
                Date: {props.date}
            </div>
            <div>
                WeatherState: {props.name}
                <br />
                {/* 
                //removed due to warning in console log, feel free to uncomment to see the images
                <object data={props.img} type="image/svg+xml">
                </object> */}
            </div>
            <div>
                Min: {props.min.toFixed(2)}
            </div>
            <div>
                Max: {props.max.toFixed(2)}
            </div>
        </div>
    );
}

export default weatherPerDay;