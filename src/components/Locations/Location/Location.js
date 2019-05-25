import React from 'react';
import classes from './Location.module.css';

const location = (props) => {
    return (
        <div className={classes.Location} onClick={props.clicked}>
            {props.location}
        </div>
    );
}

export default location;