import React from 'react'

class FormPracApp extends React.Component{
    constructor(){
        super()
        this.state={
            firstName:"",
            lastName:"",
            age:"",
            gender:"",
            location:"",
            isVegan:false,
            isKosher:false

        }
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this)
    }
    handleChange(event){
        const{name,value,checked,type} = event.target;
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    handleClick(){
        
        alert( "firstName " + this.state.firstName+"\n"+
              "Last Name: "+this.state.lastName)
    }
    render(){
        return(
            <form action="post">
                <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}/><br/>
                <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}/><br/>
                <input type="number" name="age" placeholder="Age" onChange={this.handleChange}/><br/>
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label><br/>
                <label>Location:</label>
                <select 
                    value={this.state.location}
                    onChange={this.handleChange}
                    name="location"
                    
                >
                    <option value="Sosnowiec">Sosnowiec</option>
                    <option value="Kraków">Kraków</option>
                    <option value="Gdynia">Gdynia</option>
                </select><br/>
                <label>
                    <input 
                        type="checkbox" 
                        name="isVegan"
                        checked={this.state.isVegan}
                        onChange={this.handleChange}
                    /> Vegetarian
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        name="isKosher"
                        checked={this.state.isKosher}
                        onChange={this.handleChange}
                    /> Kosher
                </label><br/>
                <button onClick={this.handleClick}>Submit</button>
            </form>
        )
    }
}

export default FormPracApp