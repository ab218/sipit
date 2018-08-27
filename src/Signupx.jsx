import React, { Component } from 'react';

const styles = {
    mainTheme: {
        backgroundColor: "#5d4427",
        height: '700px',
    },

    wrapper: {
        position: 'relative',
        backgroundColor: '#FFFF',
        width: '40em',
        height: '37em',
        marginLeft: '20em',
        paddingTop: '5em',
        textAlign: 'center',
        borderRadius: '15%',
        top: '70px',
        bottom: '70px',
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
        margin: '0',
        fontFamily: 'Karla',
    },
    elementsInput:{
        fontSize: '1.3em',
        verticalAlign: 'bottom',
    },
    th:{
        padding:'10px 10px 10px',
        textAlign:'right',
        fontSize: '18px'
    },
    td:{
        paddingTop:'10px',
        paddingBottom: '10px', 
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
        const { mainTheme, wrapper, title, elementsLabel, elementsInput, th, td } = styles; 
        return (
             <div style={mainTheme}>
                <div style={wrapper}>
                 <h2 style={title}>Sip-it</h2>
                 <form onSubmit={this.handleSubmit}>
                    <table style={{marginLeft:'auto', marginRight:'auto'}}>
                        <tbody>
                        <tr>
                            <th style={th}><label htmlFor="email" style={elementsLabel}>Email</label></th>
                            <td style={td}>
                                <input id="email" style={elementsInput} type="email" name="email" value={this.state.email} 
                                onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th style={th}><label htmlFor="password" style={elementsLabel}>Password</label></th>
                            <td style={td}>
                            <input id="password" style={elementsInput} type="password" name="password" value={this.state.password} 
                            onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th style={th}><label htmlFor="confPassword" style={elementsLabel}>Confirm Password</label></th>
                            <td style={td}>
                            <input id="confPassword" style={elementsInput} type="password" name="confPassword" value={this.state.confPassword} 
                            onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th style={th}><label htmlFor="userName" style={elementsLabel}>User Name</label></th>
                            <td style={td}>
                            <input id="userName" style={elementsInput} type="text" name="userName" value={this.state.userName} 
                            onChange={this.handleChange} />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <input type="submit" v  alue="submit" />
                 </form>
                </div>
             </div>
         );

            
    }
}