import React from 'react';
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
import { withCookies } from 'react-cookie';
import { RatingStar, FavoriteButton, ShareButtons } from '..';
import styles from './cafeCardStyles';

const CafeCard = ({ cafe, classes, i }) => (
  <div className={classes.actions}>
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
        image={cafe.image_url || 'http://www.vibeshifting.com/wp-content/plugins/InstaBuilder/images/unavailable-200x145.png'}
      />
      <CardContent>
        <span>
          <RatingStar starRating={cafe.rating} />
          <p className={classes.reviewCnt}>{`(${cafe.review_count} reviews)`}</p>
        </span>
      </CardContent>
      <CardActions disableActionSpacing style={{ display: 'flex' }}>
        <ShareButtons cafe={cafe} />
        <FavoriteButton cafe={cafe} style={{ alignSelf: 'flex-end' }} />
      </CardActions>
    </Card>
  </div>
);

const CafeCardList = ({ classes, cafesList, fetchCafesLoading }) => {
  function getCafes() {
    return cafesList
      .map((cafe, i) => <CafeCard i={i} cafe={cafe} key={cafe.id} classes={classes} />);
  }

  return (
    <div className={classes.spacer}>
      {fetchCafesLoading ? <h1 className={classes.brewing}>Brewing results...</h1> : getCafes()}
    </div>
  );
};

const mapStateToProps = state => ({
  cafesList: state.fetchCafes.cafesList,
  fetchCafesLoading: state.fetchCafes.cafesLoading,
});

export default compose(
  withStyles(styles),
  withCookies,
  connect(mapStateToProps, null),
)(CafeCardList);
