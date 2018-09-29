import React, { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withCookies, Cookies } from 'react-cookie';
import { RatingStar, FavoriteButton, ShareButtons } from '..';
import styles from './cafeCardStyles';

class CafeCard extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
    // classes: PropTypes.object.isRequired,
  };

  getCafes = () => {
    const { classes, cafesList } = this.props;
    return cafesList
      .map((cafe, i) => (
        <div key={cafe.id} className={classes.actions}>
          <Card className={classes.card}>
            <CardHeader
              title={(
                <Link className={classes.cafeTitle} to={`/business/${cafe.id}`}>
                  {cafe.name}
                </Link>
              )}
              avatar={(
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  {`${i + 1}`}
                </Avatar>
              )}
            />

            <CardMedia
              className={classes.media}
              image={cafe.image_url}
            />
            <CardContent>
              <span>
                <RatingStar starRating={cafe.rating} />
                <p>{`(${cafe.review_count} reviews)`}</p>
              </span>
            </CardContent>
            <CardActions disableActionSpacing>
              <ShareButtons cafe={cafe} />
              <FavoriteButton cafe={cafe} />
            </CardActions>
          </Card>
        </div>
      ));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.spacer}>
        {this.getCafes()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cafesList: state.fetchCafes.cafesList,
});

export default compose(
  withStyles(styles),
  withCookies,
  connect(mapStateToProps, null),
)(CafeCard);
