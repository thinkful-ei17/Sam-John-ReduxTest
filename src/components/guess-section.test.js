import React from 'react';
import {shallow} from 'enzyme';
import GuessSection from './guess-section';

describe('Guess Section rendered', () => {
    it('Renders without Crashing', () => {
        shallow(<GuessSection />);
    });
})