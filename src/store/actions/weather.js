import * as actionTypes from './actionTypes';
import axios from '../../axios-weather';

export const fetchLocationStart = (location) => {
    return {
        type: actionTypes.FETCH_LOCATION_START,
        location: location
    };
};

export const fetchLocationSuccess = (data) => {
    return {
        type: actionTypes.FETCH_LOCATION_SUCCESS,
        locations: data
    };
};

export const fetchLocationFail = () => {
    return {
        type: actionTypes.FETCH_LOCATION_FAIL
    };
};

export const fetchLocation = ( location ) => {
    return dispatch => {
        dispatch( fetchLocationStart(location) );
        axios.get( '/api/location/search/?query=' + location )
            .then( response => {
                dispatch( fetchLocationSuccess(response.data) );
                console.log('[fetchLocation actions]');
                console.log(response);
            } )
            .catch( error => {
                dispatch( clearLocation(error) );
            } );
    };
};


export const fetchWeatherByLocationStart = (id) => {
    return {
        type: actionTypes.FETCH_WEATHER_BY_LOCATION_START,
        id: id
    };
};

export const fetchWeatherByLocationSuccess = (data) => {
    return {
        type: actionTypes.FETCH_WEATHER_BY_LOCATION_SUCCESS,
        weather: data
    };
};

export const fetchWeatherByLocationFail = () => {
    return {
        type: actionTypes.FETCH_LOCATION_FAIL
    };
};

export const fetchWeatherByLocation = ( id ) => {
    return dispatch => {
        dispatch( fetchWeatherByLocationStart(id) );
        axios.get( '/api/location/' + id )
            .then( response => {
                dispatch( fetchWeatherByLocationSuccess( response.data) );
            } )
            .catch( error => {
                //dispatch( clearLocation( error ) );
                console.log(error);
            } );
    };
};

export const clearLocation = () => {
    return {
        type: actionTypes.CLEAR_LOCATION
    };
};


