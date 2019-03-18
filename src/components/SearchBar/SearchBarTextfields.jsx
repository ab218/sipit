import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import './searchBarStyles.css';
import { SEARCH_NAME, SEARCH_LOCATION } from '../../redux/types';


const SearchBarTextfields = ({ setName, setLocation }) => {
  function handleInputChange(e) {
    const { value, name } = e.target;
    if (name === 'cafeSearch') {
      setName(value);
    }
    if (name === 'locationSearch') {
      setLocation(value);
    }
  }
  return (
    <React.Fragment>
      <input
        className="input"
        id="cafeSearch"
        name="cafeSearch"
        placeholder="Search Term"
        margin="normal"
        onChange={handleInputChange}
      />
      <input
        className="input"
        id="locationSearch"
        name="locationSearch"
        placeholder="Location"
        onChange={handleInputChange}
      />
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  setName: name => dispatch({
    type: SEARCH_NAME,
    payload: name,
  }),
  setLocation: location => dispatch({
    type: SEARCH_LOCATION,
    payload: location,
  }),
});

export default compose(
  connect(null, mapDispatchToProps),
)(SearchBarTextfields);
