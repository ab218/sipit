import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MediaQuery from 'react-responsive';
import { getFavorites, removeFavorite } from '../../redux/actions';
import styles from './favoritesStyles';
import { FavoritesMapContainer } from '../../components';
import { RECENTER_FAVORITES_MAP } from '../../redux/types';

function GetFavoritesComp({
  recenterFavoritesMap, removeFavorite, cookieId, favorites, cols,
}) {
  const {
    gridList, icon, link, img,
  } = styles;
  return (
    <GridList spacing={20} cellHeight={180} cols={cols} style={gridList}>
      {favorites.map((tile, i) => (
        <GridListTile key={tile.url}>
          <img
            style={img}
            src={tile.image_url}
            alt={tile.title}
            onClick={() => recenterFavoritesMap(tile.lat, tile.lng)}
          />
          <GridListTileBar
            title={(<Link to={`/business/${tile.url}`} style={link}>{`${i + 1}. ${tile.title}`}</Link>)}
            subtitle={(
              <span>
                {`favorited: ${tile.created_at}`}
              </span>
            )}
            actionIcon={(
              <Tooltip title="Remove from favorites" placement="top">
                <IconButton style={icon} onClick={() => removeFavorite(tile.url, cookieId)} aria-label="Remove from favorites">
                  <FavoriteIcon color="error" />
                </IconButton>
              </Tooltip>
            )}
          />
        </GridListTile>
      ))}
    </GridList>
  );
}

class Favorites extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  componentDidMount() {
    const { getFavorites, cookies } = this.props;
    getFavorites(cookies.get('user').id);
  }

  render() {
    const { mainTheme, noFavorites, flexBoxContainer } = styles;
    const {
      cookies, favorites, redirect, recenterFavoritesMap, removeFavorite,
    } = this.props;
    return (
      <div style={mainTheme}>
        <FavoritesMapContainer />
        <div style={flexBoxContainer}>
          {redirect && <Redirect to="/" />}
          {favorites.length === 0 && <h1 style={noFavorites}>No favorites saved.</h1>}
          <MediaQuery minWidth={1000}>
            <GetFavoritesComp
              recenterFavoritesMap={recenterFavoritesMap}
              removeFavorite={removeFavorite}
              cookieId={cookies.get('user').id}
              favorites={favorites}
              cols={4}
            />
          </MediaQuery>
          <MediaQuery minWidth={800} maxWidth={1000}>
            <GetFavoritesComp
              recenterFavoritesMap={recenterFavoritesMap}
              removeFavorite={removeFavorite}
              cookieId={cookies.get('user').id}
              favorites={favorites}
              cols={3}
            />
          </MediaQuery>
          <MediaQuery minWidth={550} maxWidth={800}>
            <GetFavoritesComp
              recenterFavoritesMap={recenterFavoritesMap}
              removeFavorite={removeFavorite}
              cookieId={cookies.get('user').id}
              favorites={favorites}
              cols={2}
            />
          </MediaQuery>
          <MediaQuery maxWidth={550}>
            <GetFavoritesComp
              recenterFavoritesMap={recenterFavoritesMap}
              removeFavorite={removeFavorite}
              cookieId={cookies.get('user').id}
              favorites={favorites}
              cols={1}
            />
          </MediaQuery>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.fetchFavorites.favorites,
  redirect: state.redirect.redirect,
  cafesList: state.fetchCafes.cafesList,
});

//  this.props.actions.getFavorites(user_id)
// function mapDispatchToProps(dispatch){
//   return { actions: bindActionCreators({
//     getFavorites, recenterFavoritesMap, removeFavorite}, dispatch )}}

const mapDispatchToProps = dispatch => ({
  getFavorites: (user_id) => {
    dispatch(getFavorites(user_id));
  },
  recenterFavoritesMap: (lat, lng) => {
    dispatch({ type: RECENTER_FAVORITES_MAP, payload: { lat, lng } });
  },
  removeFavorite: (cafeId, userId) => {
    dispatch(removeFavorite(cafeId, userId));
  },
});

export default compose(
  withCookies,
  connect(mapStateToProps, mapDispatchToProps),
)(Favorites);
