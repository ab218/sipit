import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
<<<<<<< HEAD
import Button from '@material-ui/core/Button';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { Redirect } from 'react-router-dom'
=======
import axios from 'axios';
>>>>>>> 6957ead12a59dd4bd4096a5a9664fa3b7a81e2f7

const mainTheme = {
  backgroundColor: '#5d4427',
}

const styles = theme => ({
  container: {
    display: 'grid',
    flexWrap: 'wrap',
    width: 300,
    marginLeft: '35em',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
    },
  },
});

const customStyles = {
  formBox: {
    padding: '3em',
    textAlign: 'center',
    backgroundColor: '#FFFF',
    borderRadius: '15%',
    marginTop: '30px',
    marginBottom: '30px',
    top: '70px',
    bottom: '70px',
  },
  submitBtn: {
    display: 'inline-block',
    backgroundColor: '#FFFF',
    borderStyle: 'none',
    marginTop: '50px',
    padding: '0.3em 1em',
    textDecoration: 'none',
    textAlign: 'center',
    color: '#f26622',
    border: 'solid 2px #f26622',
    borderRadius: '3px',
    transition: '.4s',
  },
  title: {
    color: '#5d4427',
    fontSize: '56px',
    margin: '0 0 50px 0',
    fontFamily: 'Pacifico',
    fontWeight: 'bold',
  },
}

<<<<<<< HEAD
class Login extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
=======
//login prosess

class CustomizedInputs extends React.Component  {
>>>>>>> 6957ead12a59dd4bd4096a5a9664fa3b7a81e2f7

  constructor(props) {
    super(props);
<<<<<<< HEAD
    const { cookies } = props;
    this.state = {
      user: cookies.get('user') || null,
      loginRedirect: false,
      email: 'ab@ab.com',
      password: 'ab',
    };
  }
=======
    this.state = {email: '',
                  password: ''};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
>>>>>>> 6957ead12a59dd4bd4096a5a9664fa3b7a81e2f7

  onMouseOver() {
    this.submitBtn.style.backgroundColor = "#f26622";
    this.submitBtn.style.color = "#FFF";
  }

  onMouseLeave() {
    this.submitBtn.style.backgroundColor = "#FFFF";
    this.submitBtn.style.color = "#f26622";

  }

<<<<<<< HEAD
  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

=======

  // handle Input
  handleInputChange = (e) => {
    let target = e.target;
    let value  = target.value;
    let name   = target.name;
>>>>>>> 6957ead12a59dd4bd4096a5a9664fa3b7a81e2f7
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    const { cookies } = this.props
    e.preventDefault();
    fetch(`/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
<<<<<<< HEAD
      .then((results) => results.json())
      .then((response) => {
        cookies.set('user', response.name.id, { path: '/' });
        this.setState({ user: response.name.userName, loginRedirect: true, });
        console.log(response)
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
      }).catch(function (err) {
        console.log(err)
      });
=======
};
    handleSubmit = (e) => {
        alert(this.state.email);
        axios.post('/signin', {
            email : this.state.email,
            password: this.state.password
          })
          .then(function (res){
            console.log(res);
          })
          .catch(function(error){
            console.log(error);
          })
          
          e.preventDefault();
     
    }
>>>>>>> 6957ead12a59dd4bd4096a5a9664fa3b7a81e2f7

  }


  render() {
    const { classes } = this.props;
    const { email, password, loginRedirect } = this.state;

    if (loginRedirect) {
      return <Redirect to={{
        pathname: "/",
        state: 'hello'
      }} />
    }
    else {
      return (
        <div className="formWrapper" style={mainTheme}>
<<<<<<< HEAD
          <div className={classes.container} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="formBox" style={customStyles.formBox}>
              <h2 style={customStyles.title}>Sip-it</h2>

              <FormControl className={classes.margin}>
                <InputLabel
                  FormLabelClasses={{
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  }}
                  htmlFor="email"
                >
                  Email
=======
      <div className={classes.container} style={{marginLeft:'auto', marginRight:'auto'}}>
      <div className="formBox" style={customStyles.formBox}>
      <h2 style={customStyles.title}>Sip-it</h2>
       <form onSubmit={this.handleSubmit}>
        <FormControl className={classes.margin}>
          <InputLabel
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused,
            }}
            htmlFor="email"
          >
            Email
>>>>>>> 6957ead12a59dd4bd4096a5a9664fa3b7a81e2f7
          </InputLabel>
                <Input
                  classes={{
                    underline: classes.cssUnderline,
                  }}
                  id="email"
                  name="email"
                  value={email}
                  onChange={this.handleInputChange}
                />
              </FormControl>
              <FormControl className={classes.margin}>
                <InputLabel
                  FormLabelClasses={{
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  }}
                  htmlFor="Password"
                >
                  Password
          </InputLabel>
<<<<<<< HEAD
                <Input
                  classes={{
                    underline: classes.cssUnderline,
                  }}
                  id="Password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={this.handleInputChange}
                />
                <input ref={div => {
                  this.submitBtn = div;
                }}
                  onClick={this.handleSubmit}
                  className="Btn" type="submit" value="Log in"
                  onMouseOver={this.onMouseOver.bind(this)}
                  onMouseLeave={this.onMouseLeave.bind(this)}
                  style={customStyles.submitBtn} />
              </FormControl>
            </div>
          </div>
=======
          <Input
            classes={{
              underline: classes.cssUnderline,
            }}
            id="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <input ref = { div => {
              this.submitBtn = div;
            }}
            className="Btn" type="submit" value="Log in"
          onMouseOver={this.onMouseOver.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)} 
          style={customStyles.submitBtn}/>
        </FormControl>
        </form>
>>>>>>> 6957ead12a59dd4bd4096a5a9664fa3b7a81e2f7
        </div>
      );
    }
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};


// dealing with multiple higher order function 101
Login = withStyles(styles)(Login);
export default withCookies(Login);