import React from 'react';
import {shallow} from 'enzyme';
import Header from './header';

describe('Header rendered', () => {
    it('Renders without Crashing', () => {
        shallow(<Header />);
    });
})