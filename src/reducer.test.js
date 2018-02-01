import reducer from './reducer';
import {restartGame,generateAuralUpdate,makeGuess} from './actions';

describe('restartGame', () => {
    it('Should reset the state with a ne correct answer', () => {
        let state = {
            guesses: [65, 43, 20],
            feedback: 'You got it!',
            auralStatus: '',
            correctAnswer: 20
        };
        const correctAnswer = 53;
        state = reducer(state, restartGame(correctAnswer));
        expect(state).toEqual({
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer
        })
    })
});

describe('makeGuess', () => {
    it('Should handle appropriate guesses', () => {
        let state = {
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 37
        };
        const guessArr = ['37','42']
        state = reducer(state, makeGuess(guessArr[0]));
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
    it('Should reject guesses that are not numbers', () => {
        let state = {
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 75
        };
        const guess = 'seventy-five';
        state = reducer(state, makeGuess(guess));
        expect(state).toEqual({
            guesses: [],
            feedback: 'Please enter a valid number.',
            auralStatus: '',
            correctAnswer: 75
        })
    })
});

describe('Generate Aural Update', () => {
    it('Should generate the correct aural status with multiple guesses', () => {
        let state = {
            guesses: [65, 43, 21],
            feedback: "You're Hot!",
            auralStatus: '',
            correctAnswer: 20
        };

        let auralStatus = "Here's the status of the game right now: You're Hot! You've made 3 guesses. In order of most- to least-recent, they are: 21, 43, 65";

        state=reducer(state, generateAuralUpdate());
        expect(state).toEqual({
            guesses: [21, 43, 65],
            feedback: "You're Hot!",
            auralStatus,
            correctAnswer: 20
        })
    })

    it('Should generate the correct aural status with one guess', () => {
        let state = {
            guesses: [23],
            feedback: "You're Hot!",
            auralStatus: '',
            correctAnswer: 18
        };

        let auralStatus = "Here's the status of the game right now: You're Hot! You've made 1 guess. It was: 23";

        state=reducer(state, generateAuralUpdate());
        expect(state).toEqual({
            guesses: [23],
            feedback: "You're Hot!",
            auralStatus,
            correctAnswer: 18
        })
    })
})