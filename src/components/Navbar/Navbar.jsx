import React from 'react';
import { Link } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { SearchBar } from '..';
import Tooltip from '@material-ui/core/Tooltip';
import './navbarStyles.css';

const Favorites = ({ cookies }) => (
  <div className="container1">
    {cookies.get('user')
  && (
    <Tooltip title="Favorites" placement="top">
      <Link to="/favorites">
        <i className="fas fa-heart navItem fontTitles" />
      </Link>
    </Tooltip>
  )
    }
  </div>
);

const MemberControl = ({ cookies, logout }) => (
  <div className="memberControl">
    {cookies.get('user')
      ? <button type="submit" onClick={logout} className="signUpBtn fontContents">Log out</button>
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
  <div className="logo fontTitles">
    <Link style={{ color: '#FFFF' }} to="/">
      <i className="fas fa-coffee" />
      {' '}
        Sip-It
    </Link>
    <Favorites cookies={cookies} />
  </div>
);

const Navbar = ({ cookies }) => (
  <div className="navBar">
    <Logo cookies={cookies} />
    <MemberControl cookies={cookies} logout={() => cookies.remove('user')} />
    <SearchBar />
  </div>
);

export default withCookies(Navbar);
