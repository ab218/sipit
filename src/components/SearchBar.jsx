import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
  },
  textField: {
    width: 500,
  },
  input: {
    borderColor: '5px solid black',
    color: 'black',
    //    backgroundColor: 'white',
  },
};

// const icon = {
//   paddingTop: '25px',
//   fontSize: '28px',
//   color: '#FFFF',
// };

class TextFieldMargins extends Component {
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
    const { searchCafes } = this.props;
    return (
      <form onSubmit={searchCafes}>
        <TextField
          id="cafeSearch"
          name="cafeSearch"
          placeholder="Enter Search Term"
          margin="normal"
          onChange={this.handleInputChange}
          InputProps={{
            style: input,
          }}
        />
        <TextField
          id="locationSearch"
          name="locationSearch"
          placeholder="Enter Location"
          margin="normal"
          onChange={this.handleInputChange}
          InputProps={{
            style: input,
          }}
        />
        <span><button type="submit" onClick={searchCafes}><i className="fas fa-search" /></button></span>
      </form>
    );
  }
}

// TextFieldMargins.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
// const mapStateToProps = state => ({
//   foo: state,
// });

const mapDispatchToProps = dispatch => ({
  setName: name => dispatch({
    type: 'SEARCH_NAME',
    payload: name,
  }),
  setLocation: location => dispatch({
    type: 'SEARCH_LOCATION',
    payload: location,
  }),
});

export default compose(
  withStyles(styles),
  connect(null, mapDispatchToProps),
)(TextFieldMargins);
