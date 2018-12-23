import React from 'react'

const divStyle = {
    margin: '40px',
    border: '5px solid pink'
  };
  const pStyle = {
    fontSize: '15px',
    textAlign: 'center'
  };


function MyInfo(){
    return(
        <div>
            <h1 style={divStyle}>Rafal Cieslinski</h1>
            <p style={pStyle}>Jest najlepszy na swiecie całym</p>
            <ul>
                <li>"ziemniaki"</li>
                <li>"cebula"</li>
                <li>"buraki"</li>
            </ul>

        </div>
        
    );
}

export default MyInfo