import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import WeatherPerDay from './WeatherPerDay/WeatherPerDay';
import Weather from './Weather';

configure({adapter: new Adapter()});

describe('<Weather />', () => {
    let wrapper;

    const noWeather = {
        consolidated_weather: null
    }

    const props = { 
        weather: {
            consolidated_weather: [
                { id: 1, applicable_date: '10-12-12',  weather_state_name: 'test-name', img: 'test0.svg', min_temp: 12.00, max_temp: 13.00 },
                { id: 2, applicable_date: '11-12-13',  weather_state_name: 'test-name1', img: 'test1.svg', min_temp: 12.00, max_temp: 14.00 },
                { id: 3, applicable_date: '12-12-14',  weather_state_name: 'test-name2', img: 'test2.svg', min_temp: 11.00, max_temp: 15.00 },
                { id: 4, applicable_date: '13-12-15',  weather_state_name: 'test-name3', img: 'test3.svg', min_temp: 11.00, max_temp: 16.00 },
                { id: 5, applicable_date: '13-12-16',  weather_state_name: 'test-name4', img: 'test4.svg', min_temp: 10.00, max_temp: 17.00 },
                { id: 6, applicable_date: '14-12-17',  weather_state_name: 'test-name5', img: 'test5.svg', min_temp: 11.00, max_temp: 18.00 }
            ]

        } 
    };

        
    beforeEach(() => {
        wrapper = shallow(<Weather weather={noWeather}/>);
    });

    it('should not render <WeatherPerDay />', () => {
        expect(wrapper.find(WeatherPerDay)).toHaveLength(0);
    });

    it('should render multiple <WeatherPerDay /> based on consolidated_weather length, 5 instances at max ', () => {
        wrapper.setProps(props);

        if (props.weather.consolidated_weather.length > 5) {
            props.weather.consolidated_weather.length = 5
        }
        
        expect(wrapper.find(WeatherPerDay)).toHaveLength(props.weather.consolidated_weather.length);
    });


    it('should render onClick event on div inside <Weather />', () => {
        const mockCallBack = jest.fn();

        const comp = shallow((<Weather clicked={mockCallBack} img='' weather={props}/>));
        comp.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);

    });

});