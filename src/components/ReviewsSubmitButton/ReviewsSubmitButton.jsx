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

  handleSubmit = () => {
    const {
      body,
      cookies,
      handleClose,
      postReview,
      rating,
      reviewsData,
      title,
    } = this.props;
    console.log(reviewsData);
    postReview(
      title,
      body,
      rating,
      reviewsData[0].cafe_id,
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
  reviewsData: state.fetchBusinessData.reviewsData,
});

const mapDispatchToProps = dispatch => ({
  postReview: (body, rating, title, cafe_id, user_id) => {
    dispatch(postReview(body, rating, title, cafe_id, user_id));
  },
});

export default compose(
  withStyles(styles),
  withCookies,
  connect(mapStateToProps, mapDispatchToProps),
)(ReviewsSubmitButton);
