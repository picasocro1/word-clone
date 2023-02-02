import React from "react";

function GuessInput() {
    const [guess, setGuess] = React.useState('')

    const formRef = React.useRef()

    const onSubmit = (event) => {
        event.preventDefault()
        console.log({guess: guess.toUpperCase()})
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
