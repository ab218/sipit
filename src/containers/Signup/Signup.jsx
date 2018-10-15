import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import PropTypes, { instanceOf } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SignupFields } from '../../components';
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
      loginRedirect: false,
    };
  }

    handleInputChange = (e) => {
      const { value, name } = e.target;
      this.setState({
        [name]: value,
      });
    }

    render() {
      const {
        mainTheme, wrapper, title,
      } = styles;
      const {
        email, password, confPassword, first_name, last_name, loginRedirect,
      } = this.state;
      const { redirect } = this.props;

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
          {redirect && <Redirect to="/" />}
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

const mapStateToProps = state => ({
  redirect: state.redirect.redirect,
});

export default compose(
  withCookies,
  connect(mapStateToProps, null),
)(Signup);
