import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { SearchBarFilter } from '..';

class SearchBarFilterButton extends React.Component {
  state = {
    open: false,
  };

  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
        <IconButton
          style={{ color: '#FFFF' }}
          className="fas fa-filter"
          aria-label="filter"
          onClick={() => this.setState({ open: true })}
        />
        <SearchBarFilter
          open={open}
          handleClose={() => this.setState({ open: false })}
        />
      </React.Fragment>
    );
  }
}

export default SearchBarFilterButton;
