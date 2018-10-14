import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import styles from './searchBarButtonStyles';
import { searchCafes } from '../../redux/actions';

class SearchBarButton extends Component {
  render() {
    const { searchIcon } = styles;
    const { page, searchCafes } = this.props;

    return (
      <IconButton
        className="fas fa-search"
        aria-label="Search"
        onClick={e => searchCafes(e, page)}
        style={searchIcon}
      />
    );
  }
}

const mapStateToProps = state => ({
  locationSearch: state.searchFields.searchLocation,
});

const mapDispatchToProps = dispatch => ({
  searchCafes: (e, page) => {
    dispatch(searchCafes(e, page));
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(SearchBarButton);
