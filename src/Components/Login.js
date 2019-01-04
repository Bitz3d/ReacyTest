import React from 'react'

class Login extends React.Component{

    render(props){
        return(
            <div>
                <button onClick={this.props.onClickHandler}>{this.props.isLoggedIn? 'Log out':'Log in'}</button>
                <h1>{this.props.isLoggedIn? 'User logged in':'User logged out'}</h1>
            </div>
        )
    }



}


export default Login