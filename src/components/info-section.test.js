import React from 'react';
import {shallow} from 'enzyme';
import InfoSection from './info-section';

describe('InfoSection rendered', () => {
    it('Renders without Crashing', () => {
        shallow(<InfoSection />);
    });
})