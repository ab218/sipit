import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import customCss from '../index.css';
import styles from './styles/searchBarStyles';
import Dropdown from './Dropdown';
import { makeFetchCafesThunk } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  onMouseOver() {
    this.searchBtn.style.color = 'orange';
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
      makeFetchCafes, myLatLng, page,
    } = this.props;
    e.preventDefault();
    if (locationSearch === '') {
      makeFetchCafes(cafeSearch, resultsSearch, myLatLng);
    } else {
      makeFetchCafes(cafeSearch, resultsSearch, locationSearch);
    }
    if (page !== 'home') {
      this.setState({
        redirect: true,
      });
    }
  }

  render() {
    const {
      input, searchBarWrapper, customSearchBtn, searchIcon, customFilterBtn, inputStyles,
    } = styles;
    const { redirect } = this.state;

    return (
      <form onSubmit={this.searchCafes} style={searchBarWrapper}>
        {redirect && <Redirect to="/" />}
        <TextField
          id="cafeSearch"
          name="cafeSearch"
          placeholder="Enter Search Term"
          onChange={this.handleInputChange}
          inputProps={{
            style: input,
            className: this.props.classes.inputStyles,
          }}
          InputProps={{
            disableUnderline: true,
          }}
        />
        <TextField
          id="locationSearch"
          name="locationSearch"
          placeholder="Enter Location"
          margin="normal"
          onChange={this.handleInputChange}
          inputProps={{
            style: input,
          }}
          InputProps={{
            disableUnderline: true,
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
)(SearchBar);
