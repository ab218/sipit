import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styles from './searchBarButtonStyles';
import { searchCafes } from '../../redux/actions';

class SearchBarButton extends Component {
  onMouseOver() {
    this.searchBtn.style.color = 'orange';
  }

  onMouseLeave() {
    this.searchBtn.style.color = '#FFF';
  }

  render() {
    const { customSearchBtn, searchIcon } = styles;
    const {
      cafeSearch, locationSearch, resultsSearch, myLatLng, page, searchCafes,
    } = this.props;

    return (
      <button
        type="submit"
        onClick={e => searchCafes(e, cafeSearch, locationSearch, resultsSearch, myLatLng, page)}
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
