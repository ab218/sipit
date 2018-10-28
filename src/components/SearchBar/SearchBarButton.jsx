import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import styles from './searchBarStyles';
import { searchCafes } from '../../redux/actions';

class SearchBarButton extends Component {
  render() {
    const { searchIcon } = styles;
    const { searchCafes } = this.props;

    return (
      <IconButton
        className="fas fa-search"
        aria-label="Search"
        onClick={e => searchCafes(e)}
        style={searchIcon}
      />
    );
  }
}

const mapStateToProps = state => ({
  locationSearch: state.searchFields.searchLocation,
});

const mapDispatchToProps = dispatch => ({
  searchCafes: (e) => {
    dispatch(searchCafes(e));
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(SearchBarButton);
