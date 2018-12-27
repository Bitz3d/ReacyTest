import React from 'react'
import ToDo from './ToDo'
import todoData from '../utils/todoData'


class Checkbox extends React.Component{
    constructor(){
        super();
        this.state ={
                todos:todoData

        } 
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(id){
        this.setState(prevState=>{
            const updatedToDos = this.state.todos.map(todo =>{
                if(todo.id === id){
                   todo.completed = !todo.completed
                }
                return todo
            })
            return{
                todos : updatedToDos
            }
        })
    }


    render(){
        const todosList = this.state.todos.map(item => <ToDo key={item.id} items={item} handleChange={this.handleOnChange} /> )
        return(
            <div>          
                {todosList}
            </div>
        )
    }


}





export default Checkbox