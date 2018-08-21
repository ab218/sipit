import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 500,
  },
  input: {
    borderColor: '5px solid black',
    color: 'white',
//    backgroundColor: 'white',
  }
};

const textFieldPadding = {
  padding: '8em',
  //    fontFamily: 'Karla', sans-serif;
}

const icon = {
  paddingTop: '25px',
  fontSize: '28px',
  color: '#FFFF',
}
class TextFieldMargins extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { container, input } = styles;
    return (
      <div style={container} >
        <div style={textFieldPadding}></div>
        <form onSubmit={this.props.searchCafes}>
          <TextField
            id="cafeSearch"
            name="cafeSearch" 
            placeholder="Enter Search Term"
            margin="normal"
            onChange={this.props.handleInputChange}
            InputProps={{
              style: input
            }}
          />
          <i className="fas fa-search" style={icon}></i>
        </form>
      </div>
    );
  }
}

// TextFieldMargins.propTypes = {
//   classes: PropTypes.object.isRequired,
// };


export default withStyles(styles)(TextFieldMargins);
