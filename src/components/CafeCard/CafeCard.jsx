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

const CafeCard = (props) => {
  function getCafes() {
    const { classes, cafesList } = props;
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

  const { classes } = props;
  return (
    <div className={classes.spacer}>
      {getCafes()}
    </div>
  );
};

const mapStateToProps = state => ({
  cafesList: state.fetchCafes.cafesList,
});

export default compose(
  withStyles(styles),
  withCookies,
  connect(mapStateToProps, null),
)(CafeCard);
