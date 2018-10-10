import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import styles from './signupFieldsStyles';

const SignupFields = (props) => {
  const {
    email, password, confPassword, first_name, last_name, handleInputChange, classes,
  } = props;
  return (
    <React.Fragment>
      <FormControl className={classes.margin}>
        <InputLabel
          FormLabelClasses={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
        >
            Email
        </InputLabel>
        <Input
          classes={{
            input: classes.resize,
            underline: classes.cssUnderline,
          }}
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel
          FormLabelClasses={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
        >
            Password
        </InputLabel>
        <Input
          classes={{
            input: classes.resize,
            underline: classes.cssUnderline,
          }}
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel
          FormLabelClasses={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
        >
            Confirm Password
        </InputLabel>
        <Input
          classes={{
            input: classes.resize,
            underline: classes.cssUnderline,
          }}
          id="confPassword"
          name="confPassword"
          type="password"
          value={confPassword}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel
          FormLabelClasses={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
        >
            First Name
        </InputLabel>
        <Input
          classes={{
            input: classes.resize,
            underline: classes.cssUnderline,
          }}
          id="first_name"
          name="first_name"
          value={first_name}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel
          FormLabelClasses={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
        >
            Last Name
        </InputLabel>
        <Input
          classes={{
            input: classes.resize,
            underline: classes.cssUnderline,
          }}
          id="last_name"
          name="last_name"
          value={last_name}
          onChange={handleInputChange}
        />
      </FormControl>
      <br />
    </React.Fragment>
  );
};

export default withStyles(styles)(SignupFields);
