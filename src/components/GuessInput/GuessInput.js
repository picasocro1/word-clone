import React from "react";
import {checkGuess} from '../../game-helpers'

function GuessInput({guesses, setGuesses, answer, disabled}) {
    const [guess, setGuess] = React.useState('')

    const formRef = React.useRef()

    const onSubmit = (event) => {
        event.preventDefault()
        if (guess.length !== 5) return
        const nextGuesses = [...guesses, {guess, results: checkGuess(guess, answer)}]
        setGuesses(nextGuesses)
        setGuess('')
    }

    return <form ref={formRef} className="guess-input-wrapper" onSubmit={onSubmit} disabled={disabled}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" type="text" minLength="5" maxLength="5" required value={guess} onChange={
            (event) => setGuess(event.target.value.toUpperCase())
        }/>
    </form>;
}

export default GuessInput;
