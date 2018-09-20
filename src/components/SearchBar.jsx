import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import customCss from '../index.css';
import styles from './styles/searchBarStyles';
import Dropdown from './Dropdown';
import { makeFetchCafesThunk } from '../actions';

class TextFieldMargins extends Component {
  onMouseOver() {
    this.searchBtn.style.color = 'red';
  }

  onMouseLeave() {
    this.searchBtn.style.color = '#FFF';
  }

  handleInputChange = (e) => {
    const { setName, setLocation } = this.props;
    const { value, name } = e.target;

    if (name === 'cafeSearch') {
      setName(value);
    }
    if (name === 'locationSearch') {
      setLocation(value);
    }
  }

  searchCafes = (e) => {
    const {
      cafeSearch, locationSearch, resultsSearch,
      makeFetchCafes, myLatLng,
    } = this.props;
    e.preventDefault();
    if (locationSearch === '') {
      makeFetchCafes(cafeSearch, resultsSearch, myLatLng);
    } else {
      makeFetchCafes(cafeSearch, resultsSearch, locationSearch);
    }
  }

  render() {
    const {
      input, searchBarWrapper, customSearchBtn, searchIcon, customFilterBtn,
    } = styles;
    return (
      <form onSubmit={this.searchCafes} style={searchBarWrapper}>
        <TextField
          id="cafeSearch"
          className={customCss.rightPadding}
          name="cafeSearch"
          placeholder="Enter Search Term"
          onChange={this.handleInputChange}
          InputProps={{
            style: input,
          }}
        />
        <TextField
          id="locationSearch"
          name="locationSearch"
          placeholder="Enter Location"
          margin="normal"
          onChange={this.handleInputChange}
          InputProps={{
            style: input,
          }}
        />
        <button
          type="submit"
          onClick={this.searchCafes}
          style={customSearchBtn}
        >
          <i
            className="fas fa-search"
            ref={(div) => {
              this.searchBtn = div;
            }}
            onMouseOver={() => this.onMouseOver()}
            onFocus={() => this.onMouseOver()}
            onMouseLeave={() => this.onMouseLeave()}
            onBlur={() => this.onMouseLeave()}
            style={searchIcon}
          />
        </button>
        <Dropdown />
        {/* <span>
            <button type="submit" style={customFilterBtn}>
            <i className="fas fa-filter" style={{ color: '#FFFF', fontSize: '20px' }} />
            </button>
          </span> */}
      </form>
    );
  }
}

// TextFieldMargins.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

const mapStateToProps = state => ({
  myLatLng: state.getPosition.myLatLng,
  cafeSearch: state.searchFields.searchName,
  locationSearch: state.searchFields.searchLocation,
  resultsSearch: state.searchFields.searchResults,
});


const mapDispatchToProps = dispatch => ({
  makeFetchCafes: (term, limit, loc) => {
    dispatch(makeFetchCafesThunk(term, limit, loc));
  },
  setName: name => dispatch({
    type: 'SEARCH_NAME',
    payload: name,
  }),
  setLocation: location => dispatch({
    type: 'SEARCH_LOCATION',
    payload: location,
  }),
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(TextFieldMargins);
