import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './loginFieldsStyles';

const LoginFields = (props) => {
  const {
    classes, email, password, handleInputChange,
  } = props;

  return (
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
        autoComplete="current-password"
      />
    </form>
  );
};

export default withStyles(styles)(LoginFields);
