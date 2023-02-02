import React from "react";

function FinishBanner({isSuccess, answer, numOfGuesses}) {
    if (isSuccess) {
        return <div className="happy banner">
            <p>
                <strong>Congratulations!</strong> Got it in &nbsp;
                <strong>{numOfGuesses} guess(es)</strong>.
            </p>
        </div>
    }

    return <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
}

export default FinishBanner;
