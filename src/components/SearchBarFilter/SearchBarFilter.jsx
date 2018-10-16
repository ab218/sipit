import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import { ResultsDropdown, SearchBarFilterSlider, SearchBarFilterCheckbox } from '..';
import styles from './searchBarFilterStyles';

class SearchBarFilterDialog extends React.Component {
  componentWillMount() {
    document.addEventListener('keydown', this.closeOnEsc.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeOnEsc.bind(this));
  }

  closeOnEsc(e) {
    const { handleClose } = this.props;
    if (e.keyCode === 27) {
      handleClose();
    }
  }

  render() {
    const { open, handleClose } = this.props;
    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        aria-labelledby="confirmation-dialog-title"
        open={open}
      >
        <DialogTitle id="confirmation-dialog-title">Set Filters</DialogTitle>
        <DialogContent>
          <SearchBarFilterSlider />
          <ResultsDropdown />
          <SearchBarFilterCheckbox />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleClose} color="primary">Ok</Button>
        </DialogActions>
      </Dialog>
    );
  }
}


export default withStyles(styles)(SearchBarFilterDialog);
