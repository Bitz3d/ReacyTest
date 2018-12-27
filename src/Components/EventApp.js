import React from 'react'

function EventApp(){
    return(
        <div>
            <img onMouseOver={x=>{console.log('siema2')}} src="https://gq-images.condecdn.net/image/p3EJavVVazP/crop/405/landscape/f/Heineken-James-Bond-HP-GQ-21Aug15-pr_b.jpg" alt="dupa maryna"/>
            <button onClick={x=>{console.log('siema')}} >kliknij</button>
        </div>
    )
}

export default EventApp