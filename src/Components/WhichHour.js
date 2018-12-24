import React from 'react'

function WhichHour(){
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if(hours<12){
        timeOfDay='morning'
    }else if(hours>=12&&hours<18)
    {
        timeOfDay='afternoon'
    }else
    {
        timeOfDay='night'
    }

    return(
        <h1>{timeOfDay}</h1>
    ) 
}

export default WhichHour