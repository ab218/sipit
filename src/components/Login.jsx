import React, { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { withCookies, Cookies } from 'react-cookie';
import Navbar from './Navbar';
import { styles, customStyles } from './styles/loginStyles';
import LoginSubmitButton from './LoginSubmitButton';
import LoginFields from './LoginFields';

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
      <div style={mainTheme}>
        <Navbar
          page="login"
        />
        <div className={classes.container}>
          <div style={customStyles.formBox}>
            <h2 style={customStyles.title}>Sip-it</h2>
            <LoginFields
              email={email}
              password={password}
              handleInputChange={this.handleInputChange}
            />
            <LoginSubmitButton
              email={email}
              password={password}
            />
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
