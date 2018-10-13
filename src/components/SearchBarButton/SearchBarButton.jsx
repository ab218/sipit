import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import styles from './searchBarButtonStyles';
import { searchCafes } from '../../redux/actions';

class SearchBarButton extends Component {
  render() {
    const { searchIcon } = styles;
    const {
      cafeSearch, locationSearch, resultsSearch, myLatLng, page, searchCafes,
    } = this.props;

    return (
      <IconButton
        className="fas fa-search"
        aria-label="Search"
        onClick={e => searchCafes(e, cafeSearch, locationSearch, resultsSearch, myLatLng, page)}
        style={searchIcon}
      />
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
  searchCafes: (e, cafeSearch, locationSearch, resultsSearch, myLatLng, page) => {
    dispatch(searchCafes(e, cafeSearch, locationSearch, resultsSearch, myLatLng, page));
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(SearchBarButton);
