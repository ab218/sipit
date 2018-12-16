import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withCookies, Cookies } from 'react-cookie';
import PropTypes, { instanceOf } from 'prop-types';
import styles from './styles';
import { postReview } from '../../redux/actions';

class ReviewsSubmitButton extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  handleSubmit = async () => {
    const {
      body,
      cookies,
      handleClose,
      postReview,
      rating,
      businessData,
      title,
    } = this.props;
    postReview(
      title,
      body,
      rating,
      businessData.id,
      cookies.get('user').id,
    );
    handleClose();
  }

  render() {
    return (
      <React.Fragment>
        <Button onClick={() => this.handleSubmit()} color="primary">
              Submit
        </Button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  businessData: state.fetchBusinessData.businessData,
});

const mapDispatchToProps = dispatch => ({
  postReview: (title, body, coffee_rating, cafe_id, user_id) => {
    dispatch(postReview(title, body, coffee_rating, cafe_id, user_id));
  },
});

export default compose(
  withStyles(styles),
  withCookies,
  connect(mapStateToProps, mapDispatchToProps),
)(ReviewsSubmitButton);
