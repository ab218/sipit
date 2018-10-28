import React from 'react';
// import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import {
  ResultsDropdown, SearchBarFilterSlider, SearchBarFilterCheckbox, SearchByMenu,
} from '..';

class SearchBarFilterDialog extends React.Component {
  componentDidMount() {
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
          <SearchByMenu />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleClose} color="primary">Ok</Button>
        </DialogActions>
      </Dialog>
    );
  }
}


export default SearchBarFilterDialog;
