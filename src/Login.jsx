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

const customStyles = {
    formBox : {
        padding: '3em',
        textAlign: 'center',
        backgroundColor: '#FFFF',
        borderRadius: '15%',
        marginTop: '30px',
        marginBottom: '30px',
        top: '70px',
        bottom: '70px',
    },
    submitBtn : {
        display: 'inline-block',
        backgroundColor: '#FFFF',
        borderStyle: 'none',
        marginTop: '50px',
        padding: '0.3em 1em',
        textDecoration: 'none',
        textAlign: 'center',
        color: '#f26622',
        border: 'solid 2px #f26622',
        borderRadius: '3px',
        transition: '.4s',
    },
    title: {
        color: '#5d4427',
        fontSize: '56px',
        margin: '0 0 50px 0',
        fontFamily: 'Pacifico',
        fontWeight: 'bold',
    },
}

class CustomizedInputs extends React.Component  {

constructor(props) {
    super(props);
    this.state = {};
}

  onMouseOver() {
    this.submitBtn.style.backgroundColor= "#f26622";
    this.submitBtn.style.color = "#FFF";
  }

  onMouseLeave() {
    this.submitBtn.style.backgroundColor= "#FFFF";
    this.submitBtn.style.color = "#f26622";

  }

  // POST values
  handleInputChange = (e) => {
    let target = event.target;
    let value  = target.value;
    let name   = target.name;
    this.setState({
        [name] : value
    })
};
    handleSubmit = (e) => {
      e.preventDefault();
        alert(this.state);
      }


render(){
    const { classes } = this.props;

    return (
        <div className="formWrapper" style={mainTheme}>
      <div className={classes.container} style={{marginLeft:'auto', marginRight:'auto'}}>
      <div className="formBox" style={customStyles.formBox}>
      <h2 style={customStyles.title}>Sip-it</h2>
        <FormControl className={classes.margin} onSubmit={this.handleSubmit}>
          <InputLabel
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused,
            }}
            htmlFor="email"
          >
            Email
          </InputLabel>
          <Input
            classes={{
              underline: classes.cssUnderline,
            }}
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
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
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <input ref = { div => {
              this.submitBtn = div;
            }}
            className="Btn" type="submit" value="Log in"
          onMouseOver={this.onMouseOver.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)} 
          style={customStyles.submitBtn}/>
        </FormControl>
        </div>
      </div>
      </div>
    );
  }
}
  CustomizedInputs.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CustomizedInputs);