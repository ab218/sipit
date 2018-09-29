import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import styles from './loginFieldsStyles';

class LoginFields extends Component {
  render() {
    const {
      classes, email, password, handleInputChange,
    } = this.props;

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
              underline: classes.cssUnderline,
            }}
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleInputChange}
          />
        </FormControl>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(LoginFields);
