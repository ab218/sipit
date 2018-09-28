import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import MediaQuery from 'react-responsive';
import { getFavorites } from '../actions';
import styles from './styles/favoritesStyles';
import Navbar from './Navbar';

function GetFavoritesComp({ favorites, cols }) {
  const { gridList, icon } = styles;
  return (
    <GridList spacing={20} cellHeight={180} cols={cols} style={gridList}>
      {favorites.map(tile => (
        <GridListTile key={tile.url}>
          <img src={tile.image_url} alt={tile.title} />
          <Link to={`/business/${tile.url}`}>
            <GridListTileBar
              title={tile.title}
              subtitle={(
                <span>
                  {`favorited: ${tile.created_at}`}
                </span>
              )}
              actionIcon={(
                <IconButton style={icon}>
                  <FavoriteIcon color="error" />
                </IconButton>
              )}
            />
          </Link>
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
    const { mainTheme } = styles;
    const { favorites } = this.props;
    return (
      <div style={mainTheme}>
        <Navbar
          page="favorites"
        />
        {favorites.length === 0 && <h1 style={{ color: 'white' }}>No favorites saved.</h1>}
        <MediaQuery minWidth={1000}>
          <GetFavoritesComp
            favorites={favorites}
            cols={4}
          />
        </MediaQuery>
        <MediaQuery minWidth={800} maxWidth={1000}>
          <GetFavoritesComp
            favorites={favorites}
            cols={3}
          />
        </MediaQuery>
        <MediaQuery minWidth={550} maxWidth={800}>
          <GetFavoritesComp
            favorites={favorites}
            cols={2}
          />
        </MediaQuery>
        <MediaQuery maxWidth={550}>
          <GetFavoritesComp
            favorites={favorites}
            cols={1}
          />
        </MediaQuery>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.fetchFavorites.favorites,
});

const mapDispatchToProps = dispatch => ({
  getFavorites: (user_id) => {
    dispatch(getFavorites(user_id));
  },
});

export default compose(
  withCookies,
  connect(mapStateToProps, mapDispatchToProps),
)(Favorites);
