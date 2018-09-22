import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { Link } from 'react-router-dom';
import RatingStar from './RatingStar';
import styles from './styles/cafeCardStyles';

class CafeCard extends Component {
  isFavorite = (cafe) => {
    const filteredFavs = this.props.favorites.find(favorite => favorite.url === cafe.id);
    if (filteredFavs) {
      return true;
    }
    return false;
  }

  getCafes = () => {
    const { classes, cafesList } = this.props;
    return cafesList
      .map((cafe, i) => (
        <div key={cafe.id} className={classes.actions}>
          <Card className={classes.card}>
            <Link to={`/business/${cafe.id}`}>
              <CardHeader
                title={`${i + 1}. ${cafe.name}`}
              />
            </Link>
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
              <IconButton aria-label="Add to favorites">
                {this.isFavorite(cafe)
                  ? <FavoriteIcon color="error" />
                  : <FavoriteIcon />
                }
              </IconButton>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
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

// CafeCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(CafeCard);
