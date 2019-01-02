import React from 'react'

class ConditionalRenderingApp extends React.Component{
    constructor(){
        super()
        this.state={
            unReadMessage:[
                'pierwsza wiadomosc',
                'druga wiadomosc'
            ]
        }
    }

    // rendering with &&
    render(){
        return(
            <div>
                {this.state.unReadMessage.length > 0 && <h1>Yout have {this.state.unReadMessage.length} unread messages</h1>}
            </div>
        )
    }

}


export default ConditionalRenderingApp