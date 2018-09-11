import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
    results: '',
    open: false,
  };


  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes, results, handleInputChange } = this.props;
    const { open } = this.state;

    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <Select
            open={open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={results}
            onChange={handleInputChange}
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

Dropdown.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dropdown);
