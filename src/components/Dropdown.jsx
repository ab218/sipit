import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 60,
    backgroundColor: 'white',
  },
});

class Dropdown extends Component {
  state = {
    open: false,
  };

  handleInputChange = (e) => {
    const { setResults } = this.props;
    const {
      target: {
        value, name,
      },
    } = e;

    if (name === 'results') {
      setResults(value);
    }
  }


  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes, resultsSearch } = this.props;
    const { open } = this.state;

    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <Select
            open={open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            onChange={this.handleInputChange}
            value={resultsSearch}
            inputProps={{
              name: 'results',
            }}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

// Dropdown.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => ({
//   foo: state,
// });

const mapStateToProps = state => ({
  resultsSearch: state.searchFields.searchResults,
});

const mapDispatchToProps = dispatch => ({
  setResults: results => dispatch({
    type: 'SEARCH_RESULTS',
    payload: results,
  }),
});


export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Dropdown);
