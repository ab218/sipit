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
import { ResultsDropdown } from '..';

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

  componentWillMount() {
    document.addEventListener('keydown', this.closeOnEsc.bind(this));
  }


  // TODO
  componentWillReceiveProps(nextProps) {
    const { value } = this.props;
    if (nextProps.value !== value) {
      this.setState({ value: nextProps.value });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeOnEsc.bind(this));
  }


  //   handleEntering = () => {
  //     this.radioGroupRef.focus();
  //   };

  handleCancel = () => {
    const { onClose, value } = this.props;
    onClose(value);
  };

  handleOk = () => {
    const { onClose, value } = this.props;
    onClose(value);
  };

    handleChange = (event, value) => {
      this.setState({ value });
    };

    closeOnEsc(e) {
      if (e.keyCode === 27) {
        this.handleCancel();
      }
    }


    render() {
      const { value, ...other } = this.props;
      const { value: stateValue } = this.state;
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
          Near
            <Select
              native
              name="filter"
              value={stateValue}
              onChange={this.handleChange}
            >
              <option value="" />
            ))}
            </Select>
          Show result
            <ResultsDropdown />
          Good for
          Diet
          Has menu of
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
    const { open, value } = this.state;
    return (
      <React.Fragment>
        <IconButton
          style={{ color: '#FFFF' }}
          className="fas fa-filter"
          aria-label="filter"
          onClick={this.handleClickListItem}
        />
        <ConfirmationDialogRaw
          classes={{
            paper: classes.paper,
          }}
          open={open}
          onClose={this.handleClose}
          value={value}
        />
      </React.Fragment>
    );
  }
}

ConfirmationDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConfirmationDialog);
