import React, { Component } from 'react';
// import PropTypes from 'prop-types';
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
  },
};

// const icon = {
//   paddingTop: '25px',
//   fontSize: '28px',
//   color: '#FFFF',
// };

class TextFieldMargins extends Component {
  render() {
    const { input } = styles;
    const { handleInputChange, searchCafes } = this.props;
    return (
      <form onSubmit={searchCafes}>
        <TextField
          id="cafeSearch"
          name="cafeSearch"
          placeholder="Enter Search Term"
          margin="normal"
          onChange={handleInputChange}
          InputProps={{
            style: input,
          }}
        />
        <TextField
          id="locationSearch"
          name="locationSearch"
          placeholder="Enter Location"
          margin="normal"
          onChange={handleInputChange}
          InputProps={{
            style: input,
          }}
        />
        <span><button type="submit" onClick={searchCafes}><i className="fas fa-search" /></button></span>
      </form>
    );
  }
}

// TextFieldMargins.propTypes = {
//   classes: PropTypes.object.isRequired,
// };


export default withStyles(styles)(TextFieldMargins);
