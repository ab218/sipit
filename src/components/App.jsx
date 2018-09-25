import React, { Component } from 'react';
import Routes from '../Routes';
import Footer from './Footer';

const keepFooterAtBottom = {
  paddingBottom: '20em',
};

export default class App extends Component {
  render() {
    return (
      <div style={{ keepFooterAtBottom }}>
        <Routes />
        <Footer />
      </div>
    );
  }
}
