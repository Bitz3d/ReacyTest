import React, {Component} from 'react'

class DataFromApiApp extends Component{
    constructor(){
        super()
        this.state={
            character:{},
            isLoaded:false
        }
    }

    componentDidMount(){
        fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data => {
            this.setState({
                character:data,
                isLoaded:true
            })
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.isLoaded? this.state.character.name : "loading ..."}</h1>
            </div>
        )
    }
}

export default DataFromApiApp