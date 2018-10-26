import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './searchBarStyles';
import {
  SearchBarButton, SearchBarTextfields, SearchBarFilterButton,
} from '..';

const SearchBar = () => {
  const { searchBarWrapper, container2 } = styles;
  return (
    <div className="container2" style={container2}>
      <form style={searchBarWrapper}>
        <SearchBarTextfields />
        <SearchBarButton />
        <SearchBarFilterButton />
      </form>
    </div>
  );
};

export default withStyles(styles)(SearchBar);
