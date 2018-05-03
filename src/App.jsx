import React, {Component} from 'react';

require("./styles/first.css");
require("./styles/second.sass");
require("./styles/third.scss");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.words = 'some third words';
  }

  render() {
    return <div className="third stuff">{this.words}</div>;
  }
}


