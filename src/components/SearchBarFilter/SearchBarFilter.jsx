/* eslint-disable react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
// import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

class ConfirmationDialogRaw extends React.Component {
  constructor(props) {
    super();
    this.state = {
      value: props.value,
    };
  }

  // TODO
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value });
    }
  }


  //   handleEntering = () => {
  //     this.radioGroupRef.focus();
  //   };

  handleCancel = () => {
    this.props.onClose(this.props.value);
  };

  handleOk = () => {
    this.props.onClose(this.state.value);
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value, ...other } = this.props;

    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        onEntering={this.handleEntering}
        aria-labelledby="confirmation-dialog-title"
        {...other}
      >
        <DialogTitle id="confirmation-dialog-title">Set Filter</DialogTitle>
        <DialogContent>
          <Select
            native
            name="filter"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="" />
            ))}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleOk} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func,
  value: PropTypes.string,
};

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    width: '80%',
    maxHeight: 435,
  },
});

class ConfirmationDialog extends React.Component {
  state = {
    open: false,
    value: 'Dione',
  };

  handleClickListItem = () => {
    this.setState({ open: true });
  };

  handleClose = (value) => {
    this.setState({ value, open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <IconButton
          style={{ color: '#FFFF' }}
          className="fas fa-filter"
          aria-label="Delete"
          onClick={this.handleClickListItem}
        />
        <ConfirmationDialogRaw
          classes={{
            paper: classes.paper,
          }}
          open={this.state.open}
          onClose={this.handleClose}
          value={this.state.value}
        />
      </React.Fragment>
    );
  }
}

ConfirmationDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConfirmationDialog);
