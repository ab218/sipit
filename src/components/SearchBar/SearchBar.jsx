import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './searchBarStyles';
import {
  SearchBarButton, SearchBarTextfields, SearchBarFilterButton,
} from '..';

const SearchBar = () => {
  const { searchBarWrapper } = styles;
  return (
    <form style={searchBarWrapper}>
      <SearchBarTextfields />
      <SearchBarButton />
      <SearchBarFilterButton />
    </form>
  );
};

export default withStyles(styles)(SearchBar);
