import React, { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withCookies, Cookies } from 'react-cookie';
import Navbar from './Navbar';
import { styles, customStyles } from './styles/loginStyles';
import LoginSubmitButton from './LoginSubmitButton';

const mainTheme = {
  backgroundColor: '#C1A88B',
};

class Login extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: 'ab@ab.com',
      password: 'ab',
    };
  }

  handleInputChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;

    return (
      <div className="formWrapper" style={mainTheme}>
        <Navbar
          page="login"
        />
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
              <LoginSubmitButton
                email={email}
                password={password}
              />
            </FormControl>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  withCookies,
)(Login);
