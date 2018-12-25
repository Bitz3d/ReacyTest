import React from 'react'


function ContactCard(props) {
    return(
        <div className='todo-lsit'>
            <img src={props.imgUrl} alt="here shoud be image"/>
            <h3>{props.name}</h3>
            <p>Phone Number: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>

    )
    
}

export default ContactCard