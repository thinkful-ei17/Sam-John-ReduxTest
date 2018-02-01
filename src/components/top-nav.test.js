import React from 'react';
import { shallow } from 'enzyme';
import { TopNav } from './top-nav';
import { generateAuralUpdate, RESTART_GAME } from '../actions';

describe('TopNav rendered', () => {
    it('Renders without Crashing', () => {
        shallow(<TopNav />);
    });

    it('fires restartGame when new game link is clicked', () => {
        const spy = jest.fn();
        const wrapper = shallow(<TopNav dispatch={spy}/>);
        wrapper.find('.new').simulate('click');
        expect(spy).toHaveBeenCalled();
        const action = spy.mock.calls[0][0];
        expect(action.type).toEqual(RESTART_GAME);
        expect(action.correctAnswer).toBeLessThanOrEqual(100);
        expect(action.correctAnswer).toBeGreaterThanOrEqual(0);
    });

    it('generates Aural Status when Aural Update link is clicked', () => {
        const spy = jest.fn();
        const wrapper = shallow(<TopNav dispatch={spy} />);
        wrapper.find('.status-link').simulate('click');
        expect(spy).toHaveBeenCalledWith(generateAuralUpdate())
    })
})