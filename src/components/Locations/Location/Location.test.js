import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import Location from './Location';

configure({adapter: new Adapter()});

describe('<Location />', () => {

    it('should render onClick event on div inside <Location />', () => {
        const mockCallBack = jest.fn();

        const wrapper = shallow((<Location clicked={mockCallBack} />));
        wrapper.find('div').simulate('click'); 
        expect(mockCallBack.mock.calls.length).toEqual(1);

    });

    it('should render innerText in <Location /> based on location prop', () => {
        const prop = 'test-value';

        const wrapper = shallow((<Location location={prop} />));
        expect(wrapper.text()).toEqual(prop);
    });

});