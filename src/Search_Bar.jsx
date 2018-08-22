import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
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
          <TextField
            id="locationSearch"
            name="locationSearch"
            placeholder="Enter Location"
            margin="normal"
            onChange={this.props.handleInputChange}
            InputProps={{
              style: input
            }}
          />
          <span><button onClick={this.props.searchCafes}><i className="fas fa-search"></i></button></span>
        </form>
      </div>
    );
  }
}

// TextFieldMargins.propTypes = {
//   classes: PropTypes.object.isRequired,
// };


export default withStyles(styles)(TextFieldMargins);
