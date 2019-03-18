import React from 'react';
import {
  SearchBarButton, SearchBarTextfields, SearchBarFilterButton,
} from '..';
import './searchBarStyles.css';

const SearchBar = () => (
  <div className="container2">
    <form className="searchBarWrapper">
      <SearchBarTextfields />
      <SearchBarButton />
      <SearchBarFilterButton />
    </form>
  </div>
);

export default (SearchBar);
