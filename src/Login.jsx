import React, { Component } from 'react';
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

const custtomStyles = {
    submitBtn : {
        display: 'inline-block',
        padding: '0.3em 1em',
        textDecoration: 'none',
        textAlign: 'center',
        color: '#f26622',
        border: 'solid 2px #f26622',
        borderRadius: '3px',
        transition: '.4s',
    },
}

//   //Menu mouse over effect


class CustomizedInputs extends React.Component  {
//    console.log(props);

constructor(props) {
    super(props);


}

onMouseOver() {
    this.custtomStyles.submitBtn.style.backgroundColor= "#f26622";
    this.custtomStyles.submitBtn.style.color = "#FFF";
  }

  onMouseLeave() {
    this.showContent.style.removeProperty("background-color");
//    this.showContent.style.display = "none";

  }

render(){
    const { classes } = this.props;

    return (
        <div className="formWrapper" style={mainTheme}>
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
          <div className="Btn" style={custtomStyles.submitBtn}>
          <input type="submit" value="Log in"
          onMouseOver={this.onMouseOver.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)} />
          </div>
        </FormControl>
      </div>
      </div>
    );
  }
}
  CustomizedInputs.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CustomizedInputs);