import React from 'react'
import Greetings from './Greetings'
import Header2 from './Header2'

class ClassApp2 extends React.Component{
render(){
    return <div>
                <Header2 greeting="Róża" />
                <Greetings/>

           </div>
    }

}

export default ClassApp2