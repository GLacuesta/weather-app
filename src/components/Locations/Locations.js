import React from 'react';

import Location from './Location/Location';
import classes from './Locations.module.css';

const locations = (props) => {

    let locations = null, locationField = null;
    if (props.weather.locations) {
        locations = props.weather.locations.map(i => {
            return <Location 
                        key={i.woeid} 
                        location={i.title} 
                        woeid={i.woeid} 
                        clicked={ () => { props.clicked(i.woeid) } }/>
        });

        locationField = (
            <React.Fragment>
                <p>Result</p>
                <div className={classes.Result}>
                    {locations}
                </div>
            </React.Fragment>
            );
    }
    
    return (
        <div className={classes.Locations}>
            <p>Enter City Name</p>
            <input type="text" onChange={props.changed} placeholder='Search here'/>
            {locationField}
        </div>
    );
}

export default locations;