import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Locations from './Locations';
import Location from './Location/Location';

configure({adapter: new Adapter()});

describe('<Locations />', () => {
    let wrapper;

    const noLocation = {
        locations: null
    }

    const props = { weather: {
        locations: [
            { title: 'test', woeid: 123 },
            { title: 'test-again', woeid: 234 }
        ]
    } };
    
    beforeEach(() => {
        wrapper = shallow(<Locations weather={noLocation}/>);
    });

    it('should not render <Location /> if weather.locations is null ', () => {
        expect(wrapper.find(Location)).toHaveLength(0);
    });

    it('should render  multiple <Location /> based on weather.locations length', () => {
        wrapper.setProps(props);

        expect(wrapper.find(Location)).toHaveLength(props.weather.locations.length);
    });

    it('should render 1 <p> in <Location />, for enter city only', () => {
        expect(wrapper.find('p')).toHaveLength(1);
    });

    it('should render 2 <p> in <Location />, 1 for result - 1 for enter city', () => {
        wrapper.setProps(props); 
        expect(wrapper.find('p')).toHaveLength(2);
    });

    it('should not render div.Result in <Location /> if weather.locations is null', () => {
        expect(wrapper.find('.Result')).toHaveLength(0);
    });

    it('should render div.Result in <Location /> if weather.locations is not null', () => {
        wrapper.setProps(props); 
        expect(wrapper.find('.Result')).toHaveLength(1);
    });

    it('should render onClick event on div inside <Location />', () => {
        const mockCallBack = jest.fn();
    
        const comp = shallow((<Locations weather={noLocation} changed={mockCallBack} />));
        comp.find('input').simulate('change');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

});