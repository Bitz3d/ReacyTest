import React from "react"

class ToDo extends React.Component{

    render(props){
        const completedStyle={
            fontStyle:"italic",
            color:"grey",
            textDecoration:"line-through"
        }

        return(
            <div  className="todo-item">
                 <input type="checkbox" checked={this.props.items.completed} onChange={() => this.props.handleChange(this.props.items.id)}/> 
                 <p style={this.props.items.completed ? completedStyle:null}>{this.props.items.text}</p>
            </div>
        )
    }
}

export default ToDo