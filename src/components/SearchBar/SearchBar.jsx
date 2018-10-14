import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import MediaQuery from 'react-responsive';
import styles from './searchBarStyles';
import {
  SearchBarButton, SearchBarTextfields, SearchBarFilterButton,
} from '..';

const SearchBar = (props) => {
  const { searchBarWrapper } = styles;
  const { redirect, page } = props;
  return (
    <form style={searchBarWrapper}>
      {redirect && <Redirect to="/" />}
      <SearchBarTextfields />
      <SearchBarButton page={page} />
      <SearchBarFilterButton />
    </form>
  );
};

const mapStateToProps = state => ({
  redirect: state.redirect.redirect,
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, null),
)(SearchBar);
