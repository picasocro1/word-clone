import React from "react";

function GuessInput({guesses, setGuesses}) {
    const [guess, setGuess] = React.useState('')

    const formRef = React.useRef()

    const onSubmit = (event) => {
        event.preventDefault()
        if (guess.length < 5 || guess.length > 5) return
        const nextGuesses = [...guesses, guess]
        setGuesses(nextGuesses)
        setGuess('')
    }

    return <form ref={formRef} className="guess-input-wrapper" onSubmit={onSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" type="text" minLength="5" maxLength="5" required value={guess} onChange={
            (event) => setGuess(event.target.value.toUpperCase())
        }/>
    </form>;
}

export default GuessInput;
