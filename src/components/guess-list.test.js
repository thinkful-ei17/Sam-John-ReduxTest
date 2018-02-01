import React from 'react';
import {shallow} from 'enzyme';
import { GuessList } from './guess-list';

describe('Guess List rendered', () => {
    it('Renders without Crashing', () => {
        const guesses=[23, 45];
        shallow(<GuessList guesses={guesses} />);
    });
})