import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import Button from '@material-ui/core/Button';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';


const styles = {

  navBar: {
    display: 'flex',
    positon: 'absolute',
    backgroundColor: '#FFFF',
    color: '#5d4427',
    fontSize: '30px',
    boxShadow: '0 9px 10px 0 rgba(0,0,0,0.2)',
    fontFamily: 'Karla',
    paddingTop: '20px',
    zIndex: '9',
    width: '100%',
    height: '5em',
  },

  navHead: {
    margin: '10px 0 0 20px',
    minWidth: '10rem',
    float: 'left',
    fontFamily: 'Pacifico',
    fontWeight: 'bold',
    fontSize: 'calc(20px + 0.25vw)',
  },

  navIcon: {
    //  paddingRight: '20px',
  },

  navBody: {
    display: 'inline-flex',
    padding: '1rem 0 0 3rem',
    fontSize: '20px',
  },

  dropContent: {
    display: 'none',
    // display: 'grid',
    color: '#FFFF',
    position: 'relative',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: '1',

  },

  dropItem: {
    color: 'black',
    padding: '12px 16px',
    // text-decoration: none;
  },

  navItem: {
    padding: '12px 16px',
  },
  memberControl: {
    textAlign: 'right',
    fontSize: 'calc(20px + 0.25vw)',
    top: '-15px',
    //  marBotton: '20px',
  },

  logInBtn: {
    //  width: '200px',
    backgroundColor: '#f26622',
    border: '2px solid #f26622',
    borderRadius: '15px',
    color: '#FFFF',
    margin: '0 10px 20px 10px',
    padding: '5px 10px 5px 10px',
  },

  signUpBtn: {
    backgroundColor: '#6196d2',
    border: '2px solid #6196d2',
    borderRadius: '15px',
    color: '#FFFF',
    margin: '0 0.1em 2em',
    padding: '5px',
  },

  linkStyle: {

  },
};
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
    const { cookies, children } = this.props;

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
          searchCafes={this.props.searchCafes}
          handleInputChange={this.props.handleInputChange}
        />
        <Dropdown
          handleInputChange={this.props.handleInputChange}
          results={this.props.results}
        />
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
