import React from 'react'

class Header2 extends React.Component{
    render(props){
        return <header>
                <p>Welcome, {this.props.greeting} !</p>
                
        </header>
    }
}

export default Header2