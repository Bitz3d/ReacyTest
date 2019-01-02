import React from 'react'
import Login from './Login'

class ConditionalPracticeApp extends React.Component{
    constructor(){
        super()
        this.state={
            isLoggedIn:false
        }
        this.onClickHandler = this.onClickHandler.bind(this)
    }
    onClickHandler(){
        this.setState(prevState=>{
            return{
                isLoggedIn:!prevState.isLoggedIn
            }
        })
    }


    render(){
        return (
            <div>
                <Login isLoggedIn={this.state.isLoggedIn} onClickHandler={this.onClickHandler}/>
            </div>
        )
    }


}


export default ConditionalPracticeApp