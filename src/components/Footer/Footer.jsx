import React from 'react';
import styles from './footerStyles';

const FooterComponent = () => {
  const {
    footer, footerTitle, appName, tagline,
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
      </section>
    </div>
  );
};

export default FooterComponent;
