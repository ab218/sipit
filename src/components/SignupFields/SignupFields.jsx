import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './signupFieldsStyles';

const SignupFields = ({
  email, password, confPassword, first_name, last_name, handleInputChange, classes,
}) => (
  <form>
    <TextField
      label="Email"
      id="email"
      name="email"
      className={classes.margin}
      InputProps={{ className: classes.resize }}
      InputLabelProps={{ className: classes.resize }}
      value={email}
      onChange={handleInputChange}
      autoComplete="email"
    />
    <br />
    <TextField
      label="Password"
      id="password"
      name="password"
      type="password"
      className={classes.margin}
      InputProps={{ className: classes.resize }}
      InputLabelProps={{ className: classes.resize }}
      value={password}
      onChange={handleInputChange}
      autoComplete="new-password"
    />
    <br />
    <TextField
      label="Confirm password"
      id="confPassword"
      name="confPassword"
      type="password"
      className={classes.margin}
      InputProps={{ className: classes.resize }}
      InputLabelProps={{ className: classes.resize }}
      value={confPassword}
      onChange={handleInputChange}
      autoComplete="new-password"
    />
    <br />
    <TextField
      label="First Name"
      id="first_name"
      name="first_name"
      className={classes.margin}
      InputProps={{ className: classes.resize }}
      InputLabelProps={{ className: classes.resize }}
      value={first_name}
      onChange={handleInputChange}
      autoComplete="given-name"
    />
    <br />
    <TextField
      label="Last Name"
      id="last_name"
      name="last_name"
      className={classes.margin}
      InputProps={{ className: classes.resize }}
      InputLabelProps={{ className: classes.resize }}
      value={last_name}
      onChange={handleInputChange}
      autoComplete="family-name"
    />
    <br />
  </form>
);

export default withStyles(styles)(SignupFields);
