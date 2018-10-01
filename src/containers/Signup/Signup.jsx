import React, { Component } from 'react';
import axios from 'axios';
import { withCookies, Cookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import PropTypes, { instanceOf } from 'prop-types';
import { compose } from 'redux';
import Button from '@material-ui/core/Button';
import { Navbar, SignupFields } from '../../components';
import styles from './signupStyles';
import SignupSubmitButton from '../../components/SignupSubmitButton/SignupSubmitButton';

class Signup extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: 'yyy@zzz.com',
      password: 'a',
      confPassword: 'a',
      first_name: 'TestAccount',
      last_name: 'Enjoy',
      wentWrong: false,
      loginRedirect: false,
    };
  }

    handleInputChange = (e) => {
      const { value, name } = e.target;
      this.setState({
        [name]: value,
      });
    }

    handleSubmit = async (e) => {
      const { cookies } = this.props;
      const {
        email, password, first_name, last_name,
      } = this.state;
      e.preventDefault();
      try {
        const signup = await axios
          .post('/api/login/new', {
            email, password, first_name, last_name,
          });
        if (signup.data.message !== 'successful signup') {
          return this.setState({ wentWrong: true });
        }
        cookies.set('user', signup.data.user[0]);
        return this.setState({ loginRedirect: true });
      } catch (err) {
        console.log(err);
      }
      return null;
    }

    render() {
      const {
        mainTheme, wrapper, title, button, emailTaken,
      } = styles;
      const {
        email, password, confPassword, first_name, last_name, loginRedirect, wentWrong,
      } = this.state;

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
        <div style={mainTheme}>
          <Navbar
            page="signup"
          />
          <div style={wrapper}>
            <h2 style={title}>Sip-it</h2>
            <SignupFields
              email={email}
              password={password}
              confPassword={confPassword}
              first_name={first_name}
              last_name={last_name}
              handleInputChange={this.handleInputChange}
            />
            <SignupSubmitButton
              email={email}
              password={password}
              first_name={first_name}
              last_name={last_name}
            />
          </div>
        </div>
      );
    }
}
export default compose(
  withCookies,
)(Signup);
