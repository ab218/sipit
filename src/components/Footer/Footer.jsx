import React, { Component } from 'react';
import styles from './footerStyles';

class FooterComponent extends Component {
  render() {
    const {
      footer, footerTitle, appName, tagline, listBox, listItem,
    } = styles;
    return (
      <div style={footer}>
        <section>
          <div style={footerTitle}>
            <span>
              <h2 style={appName}>
              Sip-it
              </h2>
              <p style={tagline}>Find your best coffee.</p>
            </span>
          </div>
          <ul style={listBox}>
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
