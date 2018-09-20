import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import Button from '@material-ui/core/Button';
import SearchBar from './SearchBar';
import styles from './styles/navbarStyles';


class NavbarComponent extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      logoutRedirect: false,
    };
  }

  // Menu mouse over effect
  onMouseOver() {
    this.showContent.style.removeProperty('display');
    this.showContent.style.display = 'inline-flex';
  }

  onMouseLeave() {
    this.showContent.style.removeProperty('display');
    this.showContent.style.display = 'none';
  }

  logout = () => {
    const { cookies } = this.props;
    cookies.remove('user');
    this.setState({
      logoutRedirect: true,
    });
  }

  render() {
    const {
      navBar, navHead, navIcon, navItem,
      memberControl, logInBtn, signUpBtn, container1, container2,
    } = styles;

    const { logoutRedirect } = this.state;
    const { cookies, children, searchCafes } = this.props;

    if (logoutRedirect) {
      return <Redirect to="/login" href="/login" />;
    }

    return (
      <div className="navBar" style={navBar}>
        <div className="navHead" style={navHead}>
          <div className="navBrand">
            <i className="fas fa-coffee" style={navIcon} />
            {' '}
Sip-It
          </div>
        </div>
        <div className="container1" style={container1}>
          <Link to="/">
            <div className="navItem" style={navItem}>
              Home
            </div>
          </Link>
          <div className="navItem" style={navItem}>
            About
          </div>

        </div>
        <span className="memberControl" style={memberControl}>
          {cookies.get('user') === undefined
            ? <span style={logInBtn}><Link to="/login">Log In</Link></span>
            : <Button onClick={this.logout}>Log Out</Button>
          }
          {cookies.get('user') === undefined
            ? <span style={signUpBtn}><Link to="/signup">Sign Up</Link></span>
            : <span />
          }
        </span>
        {children}
        <div className="container2" style={container2}>
          <SearchBar
            searchCafes={searchCafes}
          />
        </div>

      </div>
    );
  }
}

export default withCookies(NavbarComponent);
