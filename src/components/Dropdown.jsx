import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 60,
    backgroundColor: 'white',
    borderRadius: '20px',
  },
});

class Dropdown extends Component {
  state = {
    open: false,
  };

  render() {
    const { classes, resultsSearch, setResults } = this.props;
    const { open } = this.state;
    return (
      <FormControl className={classes.formControl}>
        <Select
          open={open}
          onClose={() => this.setState({ open: false })}
          onOpen={() => this.setState({ open: true })}
          onChange={e => setResults(e.target.value)}
          value={resultsSearch}
          input={(
            <Input
              disableUnderline
            />
          )}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

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
