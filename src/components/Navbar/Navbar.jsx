import React from 'react';
import { Link } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { SearchBar } from '..';
import './navbarStyles.css';

const Favorites = ({ cookies }) => (
  <div className="container1">
    {cookies.get('user')
  && (
    <Link to="/favorites">
      <div className="navItem fontTitles" />
      <i className="fas fa-heart" />
    </Link>
  )
    }
  </div>
);

const MemberControl = ({ cookies, logout }) => (
  <div className="memberControl">
    {cookies.get('user')
      ? <button type="submit" onClick={logout} className="signUpBtn" fontContents>Log out</button>
      : (
        <React.Fragment>
          <Link to="/login"><span className="logInBtn fontContents">Log In</span></Link>
          <Link to="/signup"><span className="signUpBtn fontContents">Sign Up</span></Link>
        </React.Fragment>
      )
    }
  </div>
);

const Logo = ({ cookies }) => (
  <Link style={{ color: '#FFFF' }} to="/">
    <div className="logo fontTitles">
      <div>
        <i className="fas fa-coffee" />
        {' '}
        Sip-It
      </div>
      <Favorites cookies={cookies} />
    </div>
  </Link>
);

const Navbar = ({ cookies }) => (
  <div className="navBar">
    <Logo cookies={cookies} />
    <MemberControl cookies={cookies} logout={() => cookies.remove('user')} />
    <SearchBar />
  </div>
);

export default withCookies(Navbar);
