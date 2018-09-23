import React, { Component } from 'react';
import axios from 'axios';
import { withCookies, Cookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import PropTypes, { instanceOf } from 'prop-types';
import { compose } from 'redux';
import Navbar from './Navbar';
import styles from './styles/signupStyles';


class Signup extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: 'aaa@aaa.com',
      password: 'a',
      confPassword: 'a',
      first_name: 'a',
      last_name: 'b',
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
        email, password, confPassword, first_name, last_name,
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
        mainTheme, wrapper, title, elementsInput, th, td,
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
            {/* <form onSubmit={this.handleSubmit}> */}
            <table style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              <tbody>
                <tr>
                  <th style={th}>Email</th>
                  <td style={td}>
                    <input
                      id="email"
                      style={elementsInput}
                      type="email"
                      name="email"
                      defaultValue={email}
                      onChange={this.handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th style={th}>Password</th>
                  <td style={td}>
                    <input
                      id="password"
                      style={elementsInput}
                      type="password"
                      name="password"
                      defaultValue={password}
                      onChange={this.handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th style={th}>Confirm Password</th>
                  <td style={td}>
                    <input
                      id="confPassword"
                      style={elementsInput}
                      type="password"
                      name="confPassword"
                      defaultValue={confPassword}
                      onChange={this.handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th style={th}>First Name</th>
                  <td style={td}>
                    <input
                      id="first_name"
                      style={elementsInput}
                      type="text"
                      name="first_name"
                      value={first_name}
                      onChange={this.handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th style={th}>Last Name</th>
                  <td style={td}>
                    <input
                      id="last_name"
                      style={elementsInput}
                      type="text"
                      name="last_name"
                      value={last_name}
                      onChange={this.handleInputChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            {wentWrong
                  && <h5 style={{ color: 'red' }}>Email taken!</h5>
            }
            <input onClick={this.handleSubmit} type="submit" value="submit" />
            {/* </form> */}
          </div>
        </div>
      );
    }
}
export default compose(
  withCookies,
)(Signup);
