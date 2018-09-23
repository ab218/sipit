import React, { Component } from 'react';
import styles from './styles/signupStyles';
import Navbar from './Navbar';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'aaa@aaa.com',
      password: 'a',
      confPassword: 'a',
      firstName: 'a',
      lastName: 'b',
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
        mainTheme, wrapper, title, elementsInput, th, td,
      } = styles;
      const {
        email, password, confPassword, firstName, lastName,
      } = this.state;
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
                      id="firstName"
                      style={elementsInput}
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={this.handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th style={th}>Last Name</th>
                  <td style={td}>
                    <input
                      id="lastName"
                      style={elementsInput}
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={this.handleInputChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <input type="submit" value="submit" />
            {/* </form> */}
          </div>
        </div>
      );
    }
}
