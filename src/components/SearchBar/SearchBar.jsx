import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import styles from './searchBarStyles';
import { ResultsDropdown, SearchBarButton, SearchBarTextfields } from '..';
import { makeFetchCafesThunk } from '../../redux/actions';

class SearchBar extends Component {
  render() {
    const { searchBarWrapper } = styles;
    const { redirect, page } = this.props;
    return (
      <form style={searchBarWrapper}>
        {redirect && <Redirect to="/" />}
        <SearchBarTextfields />
        <SearchBarButton page={page} />
        <MediaQuery minWidth={550}>
          <ResultsDropdown />
        </MediaQuery>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  redirect: state.redirect.redirect,
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
