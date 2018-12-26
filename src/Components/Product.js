import React from 'react'


function Product(props){
    return(
        <div>
            <h3>Nazwa: {props.name} </h3>
            <h3>Ilość: {props.quantity}</h3>
            <h3>Cena {props.price}</h3>
        </div>
    )
}

export default Product