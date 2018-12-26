import React from 'react'

class StateApp2 extends React.Component{
    constructor(){
        super()
        this.state={
            isLoggedIn:false
        }
    }

    render(){

        return(
            <div>
                <p>{this.state.isLoggedIn ? "yes":"no"}</p>
            </div>
        )
    }

}

export default StateApp2 