import React, { Component } from 'react';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import styles from './styles/footerStyles';

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
