import React from 'react'



class Conditional extends React.Component{
    constructor(){
        super()

    }

    render(props){
        
        
        if(this.props.isLoading){
            return(
                <div>
                    <p>{laduje()}</p>
                </div>
            )
        }else{

            return(
                <div>
                    <p>{zaladowalem()}</p>
                </div>
            )
        }   
    }
}


function laduje(params) {
    return 'ładuje'
}

function zaladowalem(){
    return 'zaladowalem'
}

export default  Conditional