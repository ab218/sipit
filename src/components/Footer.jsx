import React, { Component } from 'react';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const styles = {
  footer: {
    position: 'relative',
    backgroundColor: '#405d27',
    color: '#FFFAF0',
    marginBottom: '1.25rem',
    paddingBottom: '1.25rem',
  },

  footerTitle: {
    width: '80rem',
    marginLeft: '50px',
    marginBottom: '20px',
    paddingTop: '15px',
    borderBottom: '1px solid #FFFAF0',
    letterSpacing: '2px',
    font: 'Karla',
  },

  listBox: {
    marginTop: '20px',
    width: '30%',
    paddingLeft: '20rem',
    display: 'inline-box',
  },

  listItem: {
    display: 'block',
    padding: '5px 0',
    letterSpacing: '1px',
    width: 'max-content',
  },

};
class FooterComponent extends Component {
  render() {
    const {
      footer, footerTitle, listBox, listItem,
    } = styles;
    return (
      <div className="footer" style={footer}>
        <section className="footer-content">
          <div className="footerTitle" style={footerTitle}>
            <span>
              <h2 style={{
                paddingBottom: `${20}px`,
                fontFamily: 'Pacifico',
                fontWeight: 'bold',
              }}
              >
Sip-it
              </h2>
              <p>Find your best coffee.</p>
            </span>
          </div>
          <ul className="list" style={listBox}>
            <li style={listItem}>Home</li>
            <li style={listItem}>Search</li>
            <li style={listItem}>My Page</li>
            <li style={listItem}>About Us</li>
          </ul>

        </section>
      </div>
    );
  }
}

export default FooterComponent;
