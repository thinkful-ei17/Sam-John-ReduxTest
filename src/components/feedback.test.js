import React from 'react';
import {shallow} from 'enzyme';
import {Feedback } from './feedback';

describe('Feedback rendered', () => {
    it('Renders without Crashing', () => {
        shallow(<Feedback/>);
    })
    it('Renders something', () => {
        let wrapper = shallow(<Feedback feedback='Hey!'/>)
        expect(wrapper.contains('Hey!')).toEqual(true);
    })
})
