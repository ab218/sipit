import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

console.log(React);
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  input: {
    borderColor: '5px solid black',
  }
});

const textFieldPadding = {
    padding: '100px',
//    fontFamily: 'Karla', sans-serif;
}

const icon = {
    paddingTop: '25px',
    fontSize: '28px',
    color: '#FFFF',
}
const TextFieldMargins = props => {
  const { classes } = props;

  return (
    <div className={classes.container} >
      <div style={textFieldPadding}></div>
      <TextField
        id="margin-normal"
        defaultValue="Enter Cafe name"
        margin="normal"
      />
      <i className="fas fa-search" style={icon}></i>
    </div>
  );
};

TextFieldMargins.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFieldMargins);