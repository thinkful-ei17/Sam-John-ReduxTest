import React from 'react';
import {shallow} from 'enzyme';
import {GuessCount } from './guess-count';

describe('Guess Count rendered', () => {
    it('Renders without Crashing', () => {
        shallow(<GuessCount/>);
    })
    it('Renders something', () => {
        const num = 30;
        const wrapper = shallow(<GuessCount guessCount={num}/>)
        expect(wrapper.text()).toEqual(`You've made ${num} guesses!`)
    })
})