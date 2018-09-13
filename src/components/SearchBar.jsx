import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import customCss from '../index.css';

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
    borderColor: '5px solid #f26622',
    //    borderRadius: '8px',
    color: 'black',
    backgroundColor: 'transparent',
  },
  searchBarWrapper: {
    backgroundColor: '#5d4427',
    borderRadius: '30px',
    width: '40em',
    height: '3em',
    marginTop: '10px',
  },
  customForm: {
    marginTop: '-11px',
    marginBottom: '8px',
    marginLeft: '5em',
  },
  customBtn: {
    border: '0',
    outline: '0',
    backgroundColor: 'transparent',
    verticalAlign: 'middle',
  },
};

// const icon = {
//   paddingTop: '25px',
//   fontSize: '28px',
//   color: '#FFFF',
// };

class TextFieldMargins extends Component {
  render() {
    const {
      input, searchBarWrapper, customForm, customBtn,
    } = styles;
    const { handleInputChange, searchCafes } = this.props;
    return (
      <div id="searchBarWrapper" style={searchBarWrapper}>
        <form onSubmit={searchCafes} style={customForm}>
          <TextField
            id="cafeSearch"
            className={customCss.rightPadding}
            name="cafeSearch"
            placeholder="Enter Search Term"
            onChange={handleInputChange}
            InputProps={{
              style: input,
            }}
          />
          <span style={{ color: 'black', width: '2px', height: '20px' }} />
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
          <span><button type="submit" onClick={searchCafes} style={customBtn}><i className="fas fa-search" style={{ color: '#FFFF', fontSize: '25px' }} /></button></span>
        </form>
      </div>
    );
  }
}

// TextFieldMargins.propTypes = {
//   classes: PropTypes.object.isRequired,
// };


export default withStyles(styles)(TextFieldMargins);
