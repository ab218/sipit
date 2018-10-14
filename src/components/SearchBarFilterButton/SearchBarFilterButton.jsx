import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { SearchBarFilter } from '..';

class SearchBarFilterButton extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
        <IconButton
          style={{ color: '#FFFF' }}
          className="fas fa-filter"
          aria-label="filter"
          onClick={this.handleClick}
        />
        <SearchBarFilter
          open={open}
          handleClose={this.handleClose}
        />
      </React.Fragment>
    );
  }
}

export default SearchBarFilterButton;
