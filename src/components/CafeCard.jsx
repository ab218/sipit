import React, { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import { MuiThemeProvider, withStyles, createMuiTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import { withCookies, Cookies } from 'react-cookie';
import {
  FacebookShareButton, TwitterShareButton, RedditShareButton, EmailShareButton,
  FacebookIcon, TwitterIcon, RedditIcon, EmailIcon,
} from 'react-share';
import Tooltip from '@material-ui/core/Tooltip';
import RatingStar from './RatingStar';
import styles from './styles/cafeCardStyles';

import { getFavorites } from '../actions';

// still working on it...
// const theme = createMuiTheme({
//   overrides: {
//     MuiCardHeader: {
//       root: {
//         paddingLeft: '0',
//       },
//     },
//   },
// });

class CafeCard extends Component {
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

  addFavorite = async (cafe) => {
    const { getFavorites, cookies } = this.props;
    try {
      await axios.post('/api/favorites/add', {
        title: cafe.name, url: cafe.id, image_url: cafe.image_url, user_id: cookies.get('user').id,
      });
      getFavorites(cookies.get('user').id);
    } catch (error) {
      console.log(error);
    }
  }

  removeFavorite = async (cafe) => {
    const { getFavorites, cookies } = this.props;
    try {
      await axios.delete('/api/favorites/delete', { data: { url: cafe.id, user_id: cookies.get('user').id } });
      getFavorites(cookies.get('user').id);
    } catch (error) {
      console.log(error);
    }
  }

  getCafes = () => {
    const { classes, cafesList, cookies } = this.props;

    return cafesList
      .map((cafe, i) => (
        //       <MuiThemeProvider key={cafe.id} theme={theme}>
        <div key={cafe.id} className={classes.actions}>
          <Card className={classes.card}>
            <Link to={`/business/${cafe.id}`} style={{ margin: '0 0 auto 0' }}>
              <CardHeader
                avatar={(
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                    {`${i + 1}`}
                  </Avatar>
                )}
                title={`${cafe.name}`}
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
              <FacebookShareButton url={`https://sipit-cafes.herokuapp.com/business/${cafe.id}`} style={{ margin: '0 1em 0 0' }}>
                <FacebookIcon size={24} />
              </FacebookShareButton>
              <TwitterShareButton url={`https://sipit-cafes.herokuapp.com/business/${cafe.id}`} style={{ margin: '0 1em 0 0' }}>
                <TwitterIcon size={24} />
              </TwitterShareButton>
              <RedditShareButton url={`https://sipit-cafes.herokuapp.com/business/${cafe.id}`} style={{ margin: '0 1em 0 0' }}>
                <RedditIcon size={24} />
              </RedditShareButton>
              <EmailShareButton url={`https://sipit-cafes.herokuapp.com/business/${cafe.id}`} style={{ margin: '0 1em 0 0' }}>
                <EmailIcon size={24} />
              </EmailShareButton>
              {cookies.get('user') !== undefined
                && (this.isFavorite(cafe)
                  ? (
                    <Tooltip title="Remove from favorites" placement="top">
                      <IconButton style={{ margin: '0 2em' }} onClick={() => this.removeFavorite(cafe)} aria-label="Add to favorites">
                        <FavoriteIcon color="error" />
                      </IconButton>
                    </Tooltip>
                  )
                  : (
                    <Tooltip title="Add to favorites" placement="top">
                      <IconButton style={{ margin: '0 2em' }} onClick={() => this.addFavorite(cafe)} aria-label="Add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                    </Tooltip>
                  )
                )
              }
            </CardActions>
          </Card>
        </div>
        //        </MuiThemeProvider>
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
  favorites: state.fetchFavorites.favorites,
  cafesList: state.fetchCafes.cafesList,
});

const mapDispatchToProps = dispatch => ({
  getFavorites: (user_id) => {
    dispatch(getFavorites(user_id));
  },
});

export default compose(
  withStyles(styles),
  withCookies,
  connect(mapStateToProps, mapDispatchToProps),
)(CafeCard);
