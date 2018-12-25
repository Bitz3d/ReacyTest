import React from 'react'
import Joke from './Joke'
import jokeList from "../utils/jokeList"

function haveQuestion(value){
    if(value.question){
        return value
    }
}

function JokeApp(params) {
   const jokeComponent = jokeList.filter(haveQuestion).map(joke => <Joke key={joke.id} answer={joke.answer} question={joke.question} />)

return(
    <div>
        {jokeComponent}
    </div>
    )
}
export default JokeApp