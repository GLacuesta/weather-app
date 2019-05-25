import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import WeatherPerDay from './WeatherPerDay';

configure({adapter: new Adapter()});

describe('<WeatherPerDay />', () => {
    
    it('should render div.WeatherPerDay in <WeatherPerDay />', () => {

        const props = { 
            date: '10-12-12', 
            name: 'test-name', 
            img: 'test.svg', 
            min: 12.00, 
            max: 13.00 };

        const wrapper = shallow(<WeatherPerDay {...props} />);
        expect(wrapper.find('.WeatherPerDay')).toHaveLength(1);
    });
});