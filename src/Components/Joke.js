import React from 'react'

function Joke(params) {
    return(
        <div>
            <h3 style={{display: params.question ? "block" : "none"}}>Question: {params.question} </h3>
            <h3 style={{color: !params.question && "#888888"}}>Answer: {params.answer}</h3>
        </div>
    )
}
export default Joke