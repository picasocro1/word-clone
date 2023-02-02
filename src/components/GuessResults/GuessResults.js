import React from "react";
import {range} from '../../utils'
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'

function GuessResults({guesses}) {
    const rows = range(NUM_OF_GUESSES_ALLOWED)
    const cols = range(5)

    return <div className="guess-results">
        {rows.map(
            (_, rowIndex) => (
                <p key={rowIndex} className="guess">
                    {cols.map(
                        (_, colIndex) => (
                            <span key={colIndex}
                                  className={`cell ${guesses[rowIndex]?.results[colIndex].status}`}>{guesses[rowIndex]?.guess[colIndex] || ''}</span>
                        )
                    )}
                </p>
            )
        )}
    </div>;
}

export default GuessResults;
