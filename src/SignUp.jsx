import React, { Component } from 'react';

const styles = {
    title: {
        color: '#FFFF',
    },

}

export default class Signup extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value  = target.value;
        const name   = target.name;
        this.setState({
            [name] : value
        })
    }

    handleSubmit = (event) => {
        alert(this.state);
        event.preventDefault();
    }
     render() {
        const { title, input } = styles; 
        return (
             <div>
                 <h3 style={title}>Sign Up</h3>
                 <form onSubmit={this.handleSubmit}>  
                    <label>
                        ID: 
                        <input type="text" name="userId" value={this.state.userId} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password: 
                        <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="submit" />
                </form>
             </div>
         );

            
    }
}

//export default Login;
