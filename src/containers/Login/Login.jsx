import React, { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { withCookies, Cookies } from 'react-cookie';
import { Navbar, LoginSubmitButton, LoginFields } from '../../components';
import styles from './loginStyles';

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
    const { container, formBox, title } = classes;
    return (
      <div style={mainTheme}>
        <Navbar
          page="login"
        />
        <div className={container}>
          <div className={formBox}>
            <h2 className={title}>Sip-it</h2>
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