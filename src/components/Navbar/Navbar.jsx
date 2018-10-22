import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { SearchBar } from '..';
import styles from './navbarStyles';

class NavbarComponent extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  logout = () => {
    const { cookies } = this.props;
    cookies.remove('user');
  }

  render() {
    const {
      navBar, navHead, navItem,
      memberControl, logInBtn, signUpBtn, container1, container2, fontTitles, fontContents,
    } = styles;

    const { cookies, page } = this.props;
    return (
      <div className="navBar" style={navBar}>
        <Link style={{ color: '#FFFF' }} to="/">
          <div className="navHead" style={{ ...navHead, ...fontTitles }}>
            <div className="navBrand">
              <i className="fas fa-coffee" />
              {' '}
            Sip-It
            </div>
          </div>
        </Link>
        <div className="container1" style={container1}>
          {cookies.get('user') !== undefined
          && <Link to="/favorites"><div style={{ ...navItem, ...fontTitles }}>Favorites</div></Link>
          }
        </div>
        <div className="memberControl" style={memberControl}>
          {cookies.get('user') === undefined
            && <Link to="/login"><span style={{ ...logInBtn, ...fontContents }}>Log In</span></Link>
          }
          {cookies.get('user') === undefined
            ? <Link to="/signup"><span style={{ ...signUpBtn, ...fontContents }}>Sign Up</span></Link>
            : <button type="submit" onClick={this.logout} style={{ ...signUpBtn, ...fontContents }}>Log out</button>
          }
        </div>
        <div className="container2" style={container2}>
          <SearchBar
            page={page}
          />
        </div>
      </div>
    );
  }
}

export default withCookies(NavbarComponent);
