import React from 'react';
import { Link } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { SearchBar } from '..';
import styles from './navbarStyles';

const Favorites = ({ cookies }) => (
  <div style={styles.container1}>
    {cookies.get('user')
  && <Link to="/favorites"><div style={{ ...styles.navItem, ...styles.fontTitles }}>Favorites</div></Link>
    }
  </div>
);

const MemberControl = ({ cookies, logout }) => (
  <div style={styles.memberControl}>
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
    <div style={{ ...styles.navHead, ...styles.fontTitles }}>
      <div>
        <i className="fas fa-coffee" />
        {' '}
        Sip-It
      </div>
    </div>
  </Link>
);

const Navbar = (props) => {
  const { navBar } = styles;
  const { cookies } = props;
  return (
    <div style={navBar}>
      <Logo />
      <Favorites cookies={cookies} />
      <MemberControl cookies={cookies} logout={() => cookies.remove('user')} />
      <SearchBar />
    </div>
  );
};

export default withCookies(Navbar);
