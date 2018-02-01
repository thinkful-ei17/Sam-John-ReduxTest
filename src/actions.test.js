import {RESTART_GAME, restartGame,MAKE_GUESS,makeGuess,GENERATE_AURAL_UPDATE,generateAuralUpdate} from './actions';



describe('restartGame', () => {
    it('Should run the action', () => {
        const correctAnswer = 9999;
        const testAction = restartGame(correctAnswer);
        expect(testAction.type).toEqual(RESTART_GAME);
        expect(testAction.correctAnswer).toEqual(correctAnswer);
    })
}); 

describe('makeGuess', () => {
    it('Should run the action', () => {
        const guess = 9998;
        const testAction = makeGuess(guess);
        expect(testAction.type).toEqual(MAKE_GUESS);
        expect(testAction.guess).toEqual(guess);
    })
})

describe('generateAuralUpdate', () => {
    it('Should run the action', () => {
        const testAction = generateAuralUpdate();
        expect(testAction.type).toEqual(GENERATE_AURAL_UPDATE);
    })
})