import React, { Component } from 'react';
import { Link } from "react-router-dom";


const styles = {

  navBar: {
    backgroundColor: '#FFFF',
    color: '#5d4427',
    fontSize: '30px',
    boxShadow: '0 9px 10px 0 rgba(0,0,0,0.2)',
    fontFamily: 'Karla',
    paddingTop: '20px',
    zIndex: '99999'
  },

  navHead: {
    margin: '10px 0 0 20px',
    float: 'left',
  },

  navIcon: {
    //  paddingRight: '20px',
  },

  navBody: {
    display: 'inline-flex',
    padding: '10px 0 0 70px',
    fontSize: '20px',
  },

  navDropdown: {

  },

  dropContent: {
    display: 'none',
    // display: 'grid',
    color: '#FFFF',
    position: 'absolute',
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
    fontSize: '20px',
    //  marBotton: '20px',
  },

  logInBtn: {
    //  width: '200px',
    backgroundColor: '#f26622',
    border: '2px solid #f26622',
    borderRadius: '15px',
    color: '#FFFF',
    margin: '0 10px 20px 10px',
    padding: '5px 10px 5px 10px'
  },

  signUpBtn: {
    backgroundColor: '#6196d2',
    border: '2px solid #6196d2',
    borderRadius: '15px',
    color: '#FFFF',
    margin: '0 15px 20px 15px',
    padding: '5px',
  },

  linkStyle: {

  }
}
class NavbarComponent extends Component {
  constructor(props) {
    super(props);
  }

  //Menu mouse over effect
  onMouseOver() {
    this.showContent.style.removeProperty("display");
    this.showContent.style.display = "inline-flex";
  }

  onMouseLeave() {
    this.showContent.style.removeProperty("display");
    this.showContent.style.display = "none";

  }

  render() {

    const { navBar, navHead, navIcon, navItem, navBody, dropContent, dropItem,
      memberControl, logInBtn, signUpBtn } = styles

    return (
      <div className="navBar" style={navBar}>
        <div className="navHead" style={navHead}>
          <div className="navBrand">
            <i className="fas fa-coffee" style={navIcon}></i> Sip-It
          </div>
        </div>
        <div className="navBody" style={navBody}>
          <Link to={`/`}>
            <div className="navItem" style={navItem}>
              Home
          </div>
          </Link>
          <div className="navItem" style={navItem}>
            About
          </div>
          <div className="navDropdown"
            className="navItem"
            style={navItem}
            onMouseOver={this.onMouseOver.bind(this)}
            onMouseLeave={this.onMouseLeave.bind(this)}>
            Menu
           <i className="fas fa-caret-down"></i>
            <div ref={div => {
              this.showContent = div;
            }}
              className="dropContent" style={dropContent} >
              <a className="dropDownItem" style={dropItem} href="#">Action</a>
              <a className="dropDownItem" style={dropItem} href="#">Action</a>
              <a className="dropDownItem" style={dropItem} href="#">Action</a>
              <a className="dropDownItem" style={dropItem} href="#">Action</a>
            </div>
          </div>
        </div>
        <div className="memberControl" style={memberControl}>
          <span style={logInBtn}><Link to="login">Log In</Link></span>
          <span style={signUpBtn}><Link to="signup">Sign Up</Link></span>
        </div>
        {this.props.children}

      </div>
    );
  }
}

export default NavbarComponent;
