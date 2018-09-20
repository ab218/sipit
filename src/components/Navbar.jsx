import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import Button from '@material-ui/core/Button';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';
import styles from './styles/navbarStyles';


class NavbarComponent extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      user: props.cookies.get('user') || null,
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
    this.setState({ user: null });
    this.setState({
      logoutRedirect: true,
    });
  }

  render() {
    const {
      navBar, navHead, navIcon, navItem, navBody,
      memberControl, logInBtn, signUpBtn,
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
        <div className="navBody" style={navBody}>
          <Link to="/">
            <div className="navItem" style={navItem}>
              Home
            </div>
          </Link>
          <div className="navItem" style={navItem}>
            About
          </div>
          {/* <div
            className="navDropdown"
            className="navItem"
            style={navItem}
            onMouseOver={this.onMouseOver.bind(this)}
            onFocus={this.onMouseOver.bind(this)}
            onMouseLeave={this.onMouseLeave.bind(this)}
            onBlur={this.onMouseLeave.bind(this)}

          >
            Menu
            <i className="fas fa-caret-down" />
            <div
              ref={(div) => {
                this.showContent = div;
              }}
              className="dropContent"
              style={dropContent}
            >
              <a className="dropDownItem" style={dropItem} href="#">Action</a>
              <a className="dropDownItem" style={dropItem} href="#">Action</a>
              <a className="dropDownItem" style={dropItem} href="#">Action</a>
              <a className="dropDownItem" style={dropItem} href="#">Action</a>
            </div>
          </div> */}
        </div>
        <SearchBar
          searchCafes={searchCafes}
        />
        <Dropdown />
        <div className="memberControl" style={memberControl}>
          {cookies.get('user') === undefined
            ? <span style={logInBtn}><Link to="login">Log In</Link></span>
            : <Button onClick={this.logout}>Log Out</Button>
          }
          {cookies.get('user') === undefined
            ? <span style={signUpBtn}><Link to="signup">Sign Up</Link></span>
            : <span />
          }
        </div>
        {children}

      </div>
    );
  }
}

export default withCookies(NavbarComponent);
