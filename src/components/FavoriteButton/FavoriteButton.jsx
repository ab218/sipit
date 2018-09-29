import React, { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withCookies, Cookies } from 'react-cookie';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './favoriteButtonStyles';
import { addFavorite, removeFavorite } from '../../redux/actions';

class FavoriteButton extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
    // classes: PropTypes.object.isRequired,
  };

  isFavorite = (cafe) => {
    const { favorites } = this.props;
    const foundFav = favorites.find(favorite => favorite.url === cafe.id);
    if (foundFav) {
      return true;
    }
    return false;
  }

  render() {
    const {
      cafe, cookies, removeFavorite, addFavorite,
    } = this.props;
    const { button } = styles;
    return (
      <React.Fragment>
        {cookies.get('user') !== undefined
                && (this.isFavorite(cafe)
                  ? (
                    <Tooltip title="Remove from favorites" placement="top">
                      <IconButton style={button} onClick={() => removeFavorite(cafe.id, cookies.get('user').id)} aria-label="Add to favorites">
                        <FavoriteIcon color="error" />
                      </IconButton>
                    </Tooltip>
                  )
                  : (
                    <Tooltip title="Add to favorites" placement="top">
                      <IconButton style={button} onClick={() => addFavorite(cafe, cookies.get('user').id)} aria-label="Add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                    </Tooltip>
                  )
                )
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.fetchFavorites.favorites,
});

const mapDispatchToProps = dispatch => ({
  addFavorite: (cafe, userId) => {
    dispatch(addFavorite(cafe, userId));
  },
  removeFavorite: (cafeId, userId) => {
    dispatch(removeFavorite(cafeId, userId));
  },
});

export default compose(
  withCookies,
  connect(mapStateToProps, mapDispatchToProps),
)(FavoriteButton);
