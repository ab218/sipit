import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Navbar from './Navbar';
import styles from './styles/favoritesStyles';
import { getFavorites } from '../actions';

class Favorites extends Component {
    static propTypes = {
      cookies: instanceOf(Cookies).isRequired,
    };

    constructor(props) {
      super(props);
      this.state = {

      };
    }

    componentDidMount() {
      const { getFavorites, cookies } = this.props;
      getFavorites(cookies.get('user').id);
    }

    render() {
      const { mainTheme, imgPreview } = styles;
      const { favorites } = this.props;
      return (
        <div style={mainTheme}>
          <Navbar
            page="favorites"
          />
          <h1>My Favorites:</h1>
          <ul style={{ display: 'inline-flex', listStyle: 'none', flexWrap: 'wrap' }}>
            {favorites.map(fav => (
              <li style={{ padding: '1em' }}>
                <Link to={`/business/${fav.url}`} key={fav.url}>
                  <span style={{ color: 'black' }}>{fav.title}</span>
                </Link>
                <br />
                <img src={fav.image_url} alt={fav.url} style={{ height: '100px', width: 'auto', alignSelf: 'center' }} />
                <br />
              </li>

            ))}
          </ul>
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
