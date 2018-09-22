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
import { compose } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import RatingStar from './RatingStar';
import styles from './styles/cafeCardStyles';
import { getFavorites } from '../actions';

class CafeCard extends Component {
  isFavorite = (cafe) => {
    const { favorites } = this.props;
    const foundFav = favorites.find(favorite => favorite.url === cafe.id);
    if (foundFav) {
      return true;
    }
    return false;
  }

  addFavorite = async (cafe) => {
    const { getFavorites } = this.props;
    try {
      await axios.post('/api/favorites/add', { title: cafe.name, url: cafe.id, user_id: 1 });
      console.log('favorited');
      getFavorites(1);
    } catch (error) {
      console.log(error);
    }
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
                  : <FavoriteIcon onClick={() => this.addFavorite(cafe)} />
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

const mapStateToProps = state => ({
  favorites: state.fetchFavorites.favorites,
});


const mapDispatchToProps = dispatch => ({
  getFavorites: (user_id) => {
    dispatch(getFavorites(user_id));
  },
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(CafeCard);
