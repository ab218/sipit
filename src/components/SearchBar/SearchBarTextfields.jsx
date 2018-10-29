import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import styles from './searchBarStyles';
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
      <TextField
        id="cafeSearch"
        name="cafeSearch"
        placeholder="Search Term"
        margin="normal"
        onChange={handleInputChange}
        inputProps={{
          style: styles.input,
        }}
        InputProps={{
          disableUnderline: true,
        }}
        style={{ width: 100 }}
      />
      <TextField
        id="locationSearch"
        name="locationSearch"
        placeholder="Location"
        onChange={handleInputChange}
        inputProps={{
          style: styles.input,
        }}
        InputProps={{
          disableUnderline: true,
        }}
        style={{ width: 120 }}
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
  withStyles(styles),
  connect(null, mapDispatchToProps),
)(SearchBarTextfields);
