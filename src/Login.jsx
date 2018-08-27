import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { Redirect } from 'react-router-dom'

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

class Login extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      user: cookies.get('user') || null,
      loginRedirect: false,
      email: 'ab@ab.com',
      password: 'ab',
    };
  }

  onMouseOver() {
    this.submitBtn.style.backgroundColor = "#f26622";
    this.submitBtn.style.color = "#FFF";
  }

  onMouseLeave() {
    this.submitBtn.style.backgroundColor = "#FFFF";
    this.submitBtn.style.color = "#f26622";

  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

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

  }


  render() {
    const { classes } = this.props;
    const { email, password, loginRedirect } = this.state;

    if (loginRedirect) {
      return <Redirect to="/" />
    }
    else {
      return (
        <div className="formWrapper" style={mainTheme}>
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