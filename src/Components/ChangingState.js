import React from 'react'

class ChangingState extends React.Component{

    constructor(){
        super()
        this.state={
            count:0
        }
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState => {
            return{
                count: prevState.count +1
            }
        })
    }
    render(){   
        return(
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
export default ChangingState