import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const mainTheme = {
    backgroundColor: '#5d4427',
}

const styles = theme => ({
    container: {
      display: 'grid',
      flexWrap: 'wrap',
      width: 300,
      marginLeft: '35em',
    },
    margin: {
      margin: theme.spacing.unit,
    },
    cssLabel: {
      '&$cssFocused': {
      },
    },
    cssFocused: {},
    cssUnderline: {
      '&:after': {
      },
    },
 });
  
function CustomizedInputs(props) {
    const { classes } = props;
  
    return (
      <div className={classes.container}>
        <FormControl className={classes.margin}>
          <InputLabel
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused,
            }}
            htmlFor="ID"
          >
            ID
          </InputLabel>
          <Input
            classes={{
              underline: classes.cssUnderline,
            }}
            id="ID"
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused,
            }}
            htmlFor="Password"
          >
            Password
          </InputLabel>
          <Input
            classes={{
              underline: classes.cssUnderline,
            }}
            id="Password"
          />
        </FormControl>

      </div>
    );
  }
  
  CustomizedInputs.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CustomizedInputs);