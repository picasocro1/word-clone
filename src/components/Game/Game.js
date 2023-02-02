import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults'
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'
import FinishBanner from '../FinishBanner'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [guesses, setGuesses] = React.useState([])

    const isSuccess = guesses[guesses.length - 1]?.guess === answer
    const isFinished = isSuccess || guesses.length === NUM_OF_GUESSES_ALLOWED

    return <>
        <GuessResults guesses={guesses}></GuessResults>
        <GuessInput guesses={guesses} setGuesses={setGuesses} answer={answer} disabled={isFinished}></GuessInput>
        {isFinished &&
            <FinishBanner isSuccess={isSuccess} answer={answer} numOfGuesses={guesses.length}></FinishBanner>}
    </>;
}

export default Game;
