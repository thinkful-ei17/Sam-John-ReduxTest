import React from 'react';
import {mount, shallow} from 'enzyme';
import { GuessForm } from './guess-form';
import { makeGuess } from '../actions';

describe('Guess Count rendered', () => {
    it('Renders without Crashing', () => {
        shallow(<GuessForm />);
    });

    it('fires makeGuess when a guess is submitted', () => {
        const spy = jest.fn();
        const wrapper = mount(<GuessForm dispatch={spy}/>);
        const value = '4';
        wrapper.find('#userGuess').instance().value=value;
        wrapper.simulate('submit');
        expect(spy).toHaveBeenCalledWith(makeGuess(value));
    });
})