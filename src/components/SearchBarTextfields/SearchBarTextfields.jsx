import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import styles from './searchBarTextfieldStyles';
import { SEARCH_NAME, SEARCH_LOCATION } from '../../redux/types';


const SearchBarTextfields = (props) => {
  function handleInputChange(e) {
    const { setName, setLocation } = props;
    const { value, name } = e.target;
    if (name === 'cafeSearch') {
      setName(value);
    }
    if (name === 'locationSearch') {
      setLocation(value);
    }
  }

  const { input } = styles;
  return (
    <React.Fragment>
      <TextField
        id="cafeSearch"
        name="cafeSearch"
        placeholder="Search Term"
        margin="normal"
        onChange={handleInputChange}
        inputProps={{
          style: input,
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
          style: input,
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
