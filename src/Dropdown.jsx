import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class ControlledOpenSelect extends React.Component {
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
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel style={{color: 'lightgreen'}}htmlFor="demo-controlled-open-select">{this.props.results}</InputLabel>
          <Select 
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.age}
            onChange={this.props.handleChangeResults}
            inputProps={{
              name: 'results',
              id: 'demo-controlled-open-select',
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

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);