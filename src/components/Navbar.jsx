import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import MediaQuery from 'react-responsive';
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
  // onMouseOver() {
  //   this.showContent.style.removeProperty('display');
  //   this.showContent.style.display = 'inline-flex';
  // }

  // onMouseLeave() {
  //   this.showContent.style.removeProperty('display');
  //   this.showContent.style.display = 'none';
  // }

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
      memberControl, logInBtn, signUpBtn, container1, container2, fontTitles, fontContents,
    } = styles;

    const { logoutRedirect } = this.state;
    const { cookies, page, classes } = this.props;

    if (logoutRedirect) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="navBar" style={navBar}>
        <div className="navHead" style={{ ...navHead, ...fontTitles }}>
          <div className="navBrand">
            <i className="fas fa-coffee" style={navIcon} />
            {' '}
            Sip-It
          </div>
        </div>
        <div className="container1" style={container1}>
          <Link to="/"><div className="navItem" style={{ ...navItem, ...fontTitles }}>Home</div></Link>
          <div className="navItem" style={{ ...navItem, ...fontTitles }}>About</div>
          {cookies.get('user') !== undefined
          && <Link to="/favorites"><div className="navItem" style={navItem}>Favorites</div></Link>
          }
        </div>
        <div className="memberControl" style={memberControl}>
          {cookies.get('user') === undefined
            ? <Link to="/login"><span style={{ ...logInBtn, ...fontContents }}>Log In</span></Link>
            : (
              <p style={{ marginRight: '1em' }}>
Logged in as
                {' '}
                {cookies.get('user').first_name}
              </p>
            )
          }
          {cookies.get('user') === undefined
            ? <Link to="/signup"><span style={{ ...signUpBtn, ...fontContents }}>Sign Up</span></Link>
            : <Button onClick={this.logout}>Log Out</Button>
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
