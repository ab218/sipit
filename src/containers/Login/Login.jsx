import React, { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { withCookies, Cookies } from 'react-cookie';
import { LoginSubmitButton, LoginFields } from '../../components';
import styles from './loginStyles';

const mainTheme = {
  backgroundColor: 'rgb(240, 240, 235)',
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
    const { classes, redirect } = this.props;
    const { email, password } = this.state;
    return (
      <div style={mainTheme}>
        {redirect && <Redirect to="/" />}
        <div className={classes.container}>
          <div className={classes.formBox}>
            <h2 className={classes.title}>Sip-it</h2>
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

const mapStateToProps = state => ({
  redirect: state.redirect.redirect,
});

export default compose(
  withStyles(styles),
  withCookies,
  connect(mapStateToProps, null),
)(Login);
