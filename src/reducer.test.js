import reducer from './reducer';
import {restartGame,generateAuralUpdate,makeGuess} from './actions';


describe('Reducer', () => {
    it('makeGuess', () => {
        let state = {
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 37
        };
        const guessArr = ['37','42']
        state = reducer(state,makeGuess(guessArr[0]))
        expect(state).toEqual({
            guesses: [37],
            feedback: 'You got it!',
            auralStatus: '',
            correctAnswer: 37
        });
        state = reducer(state,makeGuess(guessArr[1]))
        expect(state).toEqual({
            guesses: [37,42],
            feedback: "You're Hot!",
            auralStatus: '',
            correctAnswer: 37
        })
    })
}) 