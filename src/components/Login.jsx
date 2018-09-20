import React, { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withCookies, Cookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import { styles, customStyles } from './styles/loginStyles';

const mainTheme = {
  backgroundColor: '#C1A88B',
};

class Login extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);
    // const { cookies } = props;
    this.state = {
      // user: cookies.get('user') || null,
      loginRedirect: false,
      email: 'ab@ab.com',
      password: 'ab',
    };
  }

  onMouseOver() {
    this.submitBtn.style.backgroundColor = '#f26622';
    this.submitBtn.style.color = '#FFF';
  }

  onMouseLeave() {
    this.submitBtn.style.backgroundColor = '#FFFF';
    this.submitBtn.style.color = '#f26622';
  }

  handleInputChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async (e) => {
    const { cookies } = this.props;
    const { email, password } = this.state;
    e.preventDefault();
    try {
      const login = await axios
        .post('/api/login', {
          email, password,
        });
      console.log(login);
      cookies.set('user', login.data.name.id);
      this.setState({ loginRedirect: true });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { classes } = this.props;
    const { email, password, loginRedirect } = this.state;

    if (loginRedirect) {
      return (
        <Redirect to={{
          pathname: '/',
          state: 'snackbar',
        }}
        />
      );
    }

    return (
      <div className="formWrapper" style={mainTheme}>
        <Navbar />
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
              <input
                ref={(div) => {
                  this.submitBtn = div;
                }}
                onClick={this.handleSubmit}
                className="Btn"
                type="submit"
                value="Log in"
                onMouseOver={() => this.onMouseOver()}
                onFocus={() => this.onMouseOver()}
                onMouseLeave={() => this.onMouseLeave()}
                onBlur={() => this.onMouseLeave()}
                style={customStyles.submitBtn}
              />
            </FormControl>
          </div>
        </div>
      </div>
    );
  }
}
// Login.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default compose(
  withStyles(styles),
  withCookies,
)(Login);
