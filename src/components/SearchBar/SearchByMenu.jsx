import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SEARCH_SORT_BY } from '../../redux/types';

class SearchByMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleToggle = (sortBy) => {
    const { setSearchBy } = this.props;
    setSearchBy(sortBy);
    return this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Sort results by...
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={() => this.handleToggle('best_match')}>Best Match</MenuItem>
          <MenuItem onClick={() => this.handleToggle('rating')}>Rating</MenuItem>
          <MenuItem onClick={() => this.handleToggle('review_count')}>Review Count</MenuItem>
          <MenuItem onClick={() => this.handleToggle('distance')}>Distance</MenuItem>
        </Menu>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setSearchBy: payload => dispatch({
    type: SEARCH_SORT_BY,
    payload,
  }),
});

export default compose(
  connect(null, mapDispatchToProps),
)(SearchByMenu);
