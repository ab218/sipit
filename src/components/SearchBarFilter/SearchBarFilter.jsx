import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import { ResultsDropdown } from '..';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SEARCH_RADIUS } from '../../redux/types';
import styles from './searchBarFilterStyles';

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      allowNegative={false}
      thousandSeparator
      suffix=" meters"
    />
  );
}

class SearchBarFilterDialog extends React.Component {
  componentWillMount() {
    document.addEventListener('keydown', this.closeOnEsc.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeOnEsc.bind(this));
  }

  handleChange = () => (event) => {
    const { setRadius } = this.props;
    setRadius(event.target.value);
  };

  closeOnEsc(e) {
    const { handleClose } = this.props;
    if (e.keyCode === 27) {
      handleClose();
    }
  }

  render() {
    const {
      searchRadius, classes, open, handleClose,
    } = this.props;
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
          <TextField
            className={classes.formControl}
            label="radius"
            value={searchRadius}
            onChange={this.handleChange('numberFormat')}
            id="formatted-numberformat-input"
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
          />
          <ResultsDropdown />
          {/* Show result
          Good for
          Diet
          Has menu of */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  searchRadius: state.searchFields.searchRadius,
});

const mapDispatchToProps = dispatch => ({
  setRadius: results => dispatch({
    type: SEARCH_RADIUS,
    payload: results,
  }),
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(SearchBarFilterDialog);
