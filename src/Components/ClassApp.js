import React from 'react'

class ClassApp extends React.Component{
   
   myMetgode(){
        return 2+1
    }
    render(){
        return <h3>ksiażka napisz ksiązkę {this.myMetgode()}</h3>
    }
}

export default ClassApp