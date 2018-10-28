import React, { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withCookies, Cookies } from 'react-cookie';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import styles from './signupSubmitButtonStyles';
import { REDIRECT } from '../../redux/types';

class SignupSubmitButton extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      wentWrong: false,
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

  handleSubmit = async (e) => {
    const {
      email, password, cookies, first_name, last_name, redirectTrue,
    } = this.props;
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
      return redirectTrue();
    } catch (err) {
      console.log(err);
    }
    return null;
  }


  render() {
    const { wentWrong } = this.state;
    const { redirect, classes } = this.props;

    if (redirect) {
      return (
        <Redirect to={{
          pathname: '/',
        }}
        />
      );
    }

    return (
      <React.Fragment>
        {wentWrong
        && <h5 style={{ color: 'red' }}>Something went wrong!</h5>
        }
        <input
          ref={(div) => {
            this.submitBtn = div;
          }}
          onClick={this.handleSubmit}
          type="submit"
          value="Sign up"
          onMouseOver={() => this.onMouseOver()}
          onFocus={() => this.onMouseOver()}
          onMouseLeave={() => this.onMouseLeave()}
          onBlur={() => this.onMouseLeave()}
          className={classes.submitBtn}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  redirect: state.redirect.redirect,
});

const mapDispatchToProps = dispatch => ({
  redirectTrue: () => dispatch({
    type: REDIRECT,
    payload: true,
  }),
});

export default compose(
  withStyles(styles),
  withCookies,
  connect(mapStateToProps, mapDispatchToProps),
)(SignupSubmitButton);
