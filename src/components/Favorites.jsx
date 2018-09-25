import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import { getFavorites } from '../actions';
import styles from './styles/favoritesStyles';
import Navbar from './Navbar';

const styles2 = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: 'auto',
    padding: '1em',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class Favorites extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  componentDidMount() {
    const { getFavorites, cookies } = this.props;
    getFavorites(cookies.get('user').id);
  }

  render() {
    const { mainTheme, imgPreview } = styles;
    const { favorites, classes } = this.props;
    return (
      <div style={mainTheme}>
        <Navbar
          page="favorites"
        />
        {favorites.length === 0 && <h1 style={{ color: 'white' }}>No favorites saved.</h1>}
        <GridList cellHeight={180} cols={4} className={classes.gridList}>
          {favorites.map(tile => (
            <GridListTile key={tile.url}>
              <img src={tile.image_url} alt={tile.title} />
              <Link to={`/business/${tile.url}`}>
                <GridListTileBar
                  title={tile.title}
                  subtitle={(
                    <span>
    favorited:
                      {' '}
                      {tile.created_at.split('T')[0]}
                    </span>
                  )}
                  actionIcon={(
                    <IconButton className={classes.icon}>
                      <FavoriteIcon color="error" />
                    </IconButton>
                  )}
                />
              </Link>
            </GridListTile>
          ))}
        </GridList>
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
  withStyles(styles2),
  withCookies,
  connect(mapStateToProps, mapDispatchToProps),
)(Favorites);
