import React from 'react';
import {shallow} from 'enzyme';
import StatusSection from './status-section';

describe('StatusSection rendered', () => {
    it('Renders without Crashing', () => {
        shallow(<StatusSection />);
    });
})