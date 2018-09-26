import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import styles from './styles/searchBarStyles';
import Dropdown from './Dropdown';
import SearchBarButton from './SearchBarButton';
import SearchBarTextfields from './SearchBarTextfields';
import { makeFetchCafesThunk } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
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
    const { searchBarWrapper } = styles;
    const { redirect } = this.state;
    return (
      <form onSubmit={this.searchCafes} style={searchBarWrapper}>
        {redirect && <Redirect to="/" />}
        <SearchBarTextfields />
        <MediaQuery minWidth={550}>
          <SearchBarButton searchCafes={this.searchCafes} />
          <Dropdown />
        </MediaQuery>
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
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(SearchBar);
