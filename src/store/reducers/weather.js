import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    selectedLocation: null,
    locations: null,
    weather: null,
    isLoading: false
};

const getLocations = ( state, action ) => {
    return updateObject( state, { 
        selectedLocation: null, 
        locations: action.locations,
        weather: null,
        isLoading: false
    });
};

const getLocationStart = ( state, action ) => {
    return updateObject( state, { 
        selectedLocation: action.location, 
        locations: null,
        weather: null,
        isLoading: true
    });
};

const clearLocation = ( state, action ) => {
    return updateObject( state, { 
        selectedLocation: null, 
        locations: null,
        weather: null,
        isLoading: false
    });
};

const getWeatherByLocationStart = ( state, action ) => {
    return updateObject( state, { 
        selectedLocation: action.id, 
        isLoading: true
    });
};

const getWeatherByLocationSuccess = ( state, action ) => {
    return updateObject( state, { 
        selectedLocation: action.weather.woeid, 
        locations: null,
        weather: action.weather,
        isLoading: false
    });
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_LOCATION_SUCCESS: return getLocations(state, action);
        case actionTypes.FETCH_LOCATION_START: return getLocationStart(state, action);
        case actionTypes.CLEAR_LOCATION: return clearLocation(state, action);
        case actionTypes.FETCH_WEATHER_BY_LOCATION_START: return getWeatherByLocationStart(state, action);
        case actionTypes.FETCH_WEATHER_BY_LOCATION_SUCCESS: return getWeatherByLocationSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;