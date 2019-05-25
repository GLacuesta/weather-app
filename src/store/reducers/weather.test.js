import reducer from './weather';
import * as actionTypes from '../actions/actionTypes';

describe('weather reducer', () => {

    const data = {
        locations: [
            { title: 'test', woeid: 123 },
            { title: 'test-again', woeid: 234 }
        ],
        weather: {
            woeid: 123,
            consolidated: [
                { id: 1, applicable_date: '10-12-12',  weather_state_name: 'test-name', img: 'test0.svg', min_temp: 12.00, max_temp: 13.00 },
                { id: 2, applicable_date: '11-12-13',  weather_state_name: 'test-name1', img: 'test1.svg', min_temp: 12.00, max_temp: 14.00 },
                { id: 3, applicable_date: '12-12-14',  weather_state_name: 'test-name2', img: 'test2.svg', min_temp: 11.00, max_temp: 15.00 },
                { id: 4, applicable_date: '13-12-15',  weather_state_name: 'test-name3', img: 'test3.svg', min_temp: 11.00, max_temp: 16.00 },
                { id: 5, applicable_date: '13-12-16',  weather_state_name: 'test-name4', img: 'test4.svg', min_temp: 10.00, max_temp: 17.00 },
                { id: 6, applicable_date: '14-12-17',  weather_state_name: 'test-name5', img: 'test5.svg', min_temp: 11.00, max_temp: 18.00 }
            ]
        }
    }

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            selectedLocation: null,
            locations: null,
            weather: null,
            isLoading: false
        });
    });

    it('should store locations onFecthLocation', () => {
        expect(reducer({
            selectedLocation: null,
            locations: null,
            weather: null,
            isLoading: false
        }, { 
            type: actionTypes.FETCH_LOCATION_SUCCESS,
            selectedLocation: null,
            locations: data.locations,
            weather: null,
            isLoading: false
         })).toEqual({
            selectedLocation: null,
            locations: data.locations,
            weather: null,
            isLoading: false
        });
    });

    it('should store weather and id onFetchWeatherByLocation', () => {
        expect(reducer({
            selectedLocation: null,
            locations: null,
            weather: null,
            isLoading: false
        }, { 
            type: actionTypes.FETCH_WEATHER_BY_LOCATION_SUCCESS,
            selectedLocation: data.weather.woeid,
            locations: null,
            weather: data.weather,
            isLoading: false
         })).toEqual({
            selectedLocation: data.weather.woeid,
            locations: null,
            weather: data.weather,
            isLoading: false
        });
    });


    it('should clear state', () => {
        expect(reducer({
            selectedLocation: 'test',
            locations: data.locations,
            weather: null,
            isLoading: true
        }, { 
            type: actionTypes.CLEAR_LOCATION,
            selectedLocation: null,
            locations: null,
            weather: null,
            isLoading: false
         })).toEqual({
            selectedLocation: null,
            locations: null,
            weather: null,
            isLoading: false
        });
    });




});