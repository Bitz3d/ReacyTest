import React from 'react'

class Greetings extends React.Component{
    
    render(){
         let date = new Date()
        let hour = date.getHours();
        let returnStatment;
        if(hour <12){
            returnStatment="Jak Ci mija poranek";
        }else if(hour>=12 && hour<18)
            returnStatment="Jak Ci mija popołudnie";
        else
            returnStatment="Jak Ci mija Wieczór"

        return <div>{returnStatment}</div>
    }


}


export default Greetings