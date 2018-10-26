import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { SearchBar } from '..';
import styles from './navbarStyles';

const Favorites = ({ cookies }) => (
  <div className="container1" style={styles.container1}>
    {cookies.get('user')
  && <Link to="/favorites"><div style={{ ...styles.navItem, ...styles.fontTitles }}>Favorites</div></Link>
    }
  </div>
);

const MemberControl = ({ cookies, logout }) => (
  <div className="memberControl" style={styles.memberControl}>
    {cookies.get('user')
      ? <button type="submit" onClick={logout} style={{ ...styles.signUpBtn, ...styles.fontContents }}>Log out</button>
      : (
        <React.Fragment>
          <Link to="/login"><span style={{ ...styles.logInBtn, ...styles.fontContents }}>Log In</span></Link>
          <Link to="/signup"><span style={{ ...styles.signUpBtn, ...styles.fontContents }}>Sign Up</span></Link>
        </React.Fragment>
      )
    }
  </div>
);

const Logo = () => (
  <Link style={{ color: '#FFFF' }} to="/">
    <div className="navHead" style={{ ...styles.navHead, ...styles.fontTitles }}>
      <div className="navBrand">
        <i className="fas fa-coffee" />
        {' '}
        Sip-It
      </div>
    </div>
  </Link>
);

class NavbarComponent extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  render() {
    const { navBar } = styles;
    const { cookies, page } = this.props;
    return (
      <div className="navBar" style={navBar}>
        <Logo />
        <Favorites cookies={cookies} />
        <MemberControl cookies={cookies} logout={() => cookies.remove('user')} />
        <SearchBar page={page} />
      </div>
    );
  }
}

export default withCookies(NavbarComponent);
