import React, { Component } from 'react';
import styles from './styles/searchBarStyles';


class SearchBarButton extends Component {
  onMouseOver() {
    this.searchBtn.style.color = 'orange';
  }

  onMouseLeave() {
    this.searchBtn.style.color = '#FFF';
  }

  render() {
    const { customSearchBtn, searchIcon } = styles;
    const { searchCafes } = this.props;

    return (
      <button
        type="submit"
        onClick={searchCafes}
        style={customSearchBtn}
      >
        <i
          className="fas fa-search"
          ref={(div) => {
            this.searchBtn = div;
          }}
          onMouseOver={() => this.onMouseOver()}
          onFocus={() => this.onMouseOver()}
          onMouseLeave={() => this.onMouseLeave()}
          onBlur={() => this.onMouseLeave()}
          style={searchIcon}
        />
      </button>
    );
  }
}

export default SearchBarButton;
