import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import styles from '../styles/searchBarStyles';
import { SEARCH_NAME, SEARCH_LOCATION } from '../../constants/actionTypes';


class SearchBarTextfields extends Component {
  handleInputChange = (e) => {
    const { setName, setLocation } = this.props;
    const { value, name } = e.target;
    if (name === 'cafeSearch') {
      setName(value);
    }
    if (name === 'locationSearch') {
      setLocation(value);
    }
  }

  render() {
    const { input } = styles;
    const { classes } = this.props;
    return (
      <React.Fragment>
        <TextField
          id="cafeSearch"
          name="cafeSearch"
          placeholder="Search Term"
          onChange={this.handleInputChange}
          inputProps={{
            style: input,
            className: classes.inputStyles,
          }}
          InputProps={{
            disableUnderline: true,
          }}
          style={{ width: 120 }}
        />
        <TextField
          id="locationSearch"
          name="locationSearch"
          placeholder="Location"
          margin="normal"
          onChange={this.handleInputChange}
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
  }
}

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
