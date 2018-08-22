import React, { Component } from 'react';

const styles = {
    mainTheme: {
        backgroundColor: "#5d4427",
    },

    wrapper: {
        position: 'relative',
        backgroundColor: '#FFFF',
        width: '50em',
        height: '40em',
        marginLeft: '20em',
        paddingTop: '5em',
        textAlign: 'center',
        borderRadius: '15%',
        top: '100px',
        bottom: '100px',
    },
    title: {
        color: '#5d4427',
        fontSize: '56px',
        margin: '0 0 50px 0',
        fontFamily: 'Pacifico',
        fontWeight: 'bold',
    },
    elementsLabel: {
        color: 'gray',
        margin: '0 0 30px 0',

    elementsInput:{
        fontSize: '1.3em',  
    }
    }
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
        const { mainTheme, wrapper, title, elementsLabel, elementsInput, input } = styles; 
        return (
             <div style={mainTheme}>
                <div style={wrapper}>
                 <h2 style={title}>Sip-it</h2>
                 <form onSubmit={this.handleSubmit}>  
                    <label style={elementsLabel}>
                        Email
                        <input style={elementsInput} type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label><br />
                    <label style={elementsLabel}>
                        Password
                        <input style={elementsInput} type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                        </label><br />
                    <label style={elementsLabel}>
                        Confirm Password
                        <input style={elementsInput} type="text" name="confPassword" value={this.state.confPassword} onChange={this.handleChange} />
                        </label><br />
                    <label style={elementsLabel}>
                        User Name
                        <input style={elementsInput} type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
                    </label><br />
                    <input type="submit" value="submit" />
                    
                 </form>
                </div>
             </div>
         );

            
    }
}

//export default Login;