import React from 'react';
import styles from './signupFieldsStyles';

const SignupFields = (props) => {
  const {
    elementsInput, th, td, center,
  } = styles;
  const {
    email, password, confPassword, first_name, last_name, handleInputChange,
  } = props;
  return (
    <table style={center}>
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
          </td>
        </tr>
        <tr>
          <th style={th}>Confirm</th>
          <td style={td}>
            <input
              id="confPassword"
              style={elementsInput}
              type="password"
              name="confPassword"
              defaultValue={confPassword}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SignupFields;
