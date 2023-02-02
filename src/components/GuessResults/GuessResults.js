import React from "react";
import {range} from '../../utils'
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'

function GuessResults({guesses}) {
    const rows = range(0, NUM_OF_GUESSES_ALLOWED)
    const cols = range(0, 5)

    return <div className="guess-results">
        {rows.map(
            (_, rowIndex) => (
                <p key={rowIndex} className="guess">
                    {cols.map(
                        (_, colIndex) => (
                            <span key={colIndex} className="cell">{guesses[rowIndex]?.[colIndex] || ''}</span>
                        )
                    )}
                </p>
            )
        )}
    </div>;
}

export default GuessResults;
