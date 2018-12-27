import React from "react"

class ToDo extends React.Component{

    render(props){
        return(
            <div  className="todo-item">
                 <input type="checkbox" checked={this.props.items.completed} onChange={() => this.props.handleChange(this.props.items.id)}/> 
                 <p>{this.props.items.text}</p>
            </div>
        )
    }
}

export default ToDo