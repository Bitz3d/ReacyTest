import React from 'react'

class StateApp extends React.Component{
    constructor(){
        super()
        this.state={
            name:"Rafał",
            age: 29
        };
    }
    render(){
        return(
            <div>
                <p>Imie to {this.state.name}</p>
                <p>Wiek to {this.state.age}</p>
            </div>
        )

    }
}

export default StateApp