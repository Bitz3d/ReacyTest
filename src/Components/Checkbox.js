import React from 'react'
import ToDo from './ToDo'
import todoData from '../utils/todoData'

function Checkbox(){

const todosList = todoData.map(item => <ToDo key={item.id} items={item} /> )

return(
    <div>          
        {todosList}
    </div>
    )

}

export default Checkbox