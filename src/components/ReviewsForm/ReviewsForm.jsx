import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import { EditableRatingStar, ReviewsSubmitButton } from '..';
import styles from './reviewsFormStyles';

class ReviewsForm extends React.Component {
  state = {
    open: false,
    title: '',
    body: '',
    rating: 1,
  };

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (e, name) => {
    this.setState({
      [name]: e.target.value,
    });
  }

  render() {
    const {
      rating,
      title,
      body,
      open,
    } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Button className={classes.btn} onClick={this.handleClickOpen}>Write a review</Button>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Title</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="title"
              id="title"
              value={title}
              label="Title"
              type="text"
              onChange={e => this.handleChange(e, 'title')}
              fullWidth
            />
            <TextField
              margin="dense"
              name="body"
              id="body"
              value={body}
              label="Write your review!"
              multiline
              type="textbox"
              onChange={e => this.handleChange(e, 'body')}
              fullWidth
            />
            <EditableRatingStar
              onStarClick={this.onStarClick}
              rating={rating}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <ReviewsSubmitButton
              handleClose={this.handleClose}
              rating={rating}
              title={title}
              body={body}
            />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(ReviewsForm);
