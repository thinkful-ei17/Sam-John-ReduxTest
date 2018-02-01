import React from 'react';
import {shallow} from 'enzyme';
import Game from './game';

describe('Game rendered', () => {
    it('Renders without Crashing', () => {
        shallow(< Game />);
    })
})