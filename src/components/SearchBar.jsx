import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import customCss from '../index.css';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    positon: 'absolute',
    height: '5em',
    top: 0,


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
    position: 'absolute',
    top: '21.5vh',
    left: '48%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#5d4427',
    borderRadius: '30px',
    width: '18em',
    height: '1.3em',
    marginTop: '10px',
  },
  customForm: {
    position: 'relative',
    display: 'contents',
  },
  customSearchBtn: {
    border: '0',
    outline: '0',
    backgroundColor: 'transparent',
    verticalAlign: 'middle',
  },
  customFilterBtn: {
    border: '0',
    outline: '0',
    backgroundColor: 'transparent',
    verticalAlign: 'middle',
    paddingLeft: '3px',
    marginBottom: '40px',
  },
  filterWrapper: {
    backgroundColor: '#5d4427',
    borderRadius: '50%',
    position: 'absolute',
    width: '40px',
    height: '40px',
    margin: '0.35em  0em 0em 0.5em',
    paddingLeft: '0.2em',
  },
};

class TextFieldMargins extends Component {
  render() {
    const {
      input, searchBarWrapper, customForm, customSearchBtn, filterWrapper, customFilterBtn,
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
          <span><button type="submit" onClick={searchCafes} style={customSearchBtn}><i className="fas fa-search" style={{ color: '#FFFF', fontSize: '25px' }} /></button></span>
          <span>
            <button type="submit" style={customFilterBtn}><i className="fas fa-filter" style={{ color: '#FFFF', fontSize: '20px' }} /></button>
          </span>
        </form>

      </div>
    );
  }
}

// TextFieldMargins.propTypes = {
//   classes: PropTypes.object.isRequired,
// };


export default withStyles(styles)(TextFieldMargins);
