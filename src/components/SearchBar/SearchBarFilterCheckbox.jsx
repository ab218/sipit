import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SEARCH_OPEN_NOW } from '../../redux/types';

class SearchBarFilterCheckbox extends React.Component {
  handleChange = () => (event) => {
    const { setOpenNow } = this.props;
    //    dispatching action to the redux store
    setOpenNow(event.target.checked);
  };

  render() {
    const { searchOpenNow } = this.props;
    return (
      <div>
        <Checkbox
          checked={searchOpenNow}
          onChange={this.handleChange()}
          value="checked"
          color="primary"
        />
        {' '}
Is Open Now
      </div>
    );
  }
}
const mapStateToProps = state => ({
  searchOpenNow: state.searchFields.searchOpenNow,
});

const mapDispatchToProps = dispatch => ({
  setOpenNow: bool => dispatch({
    type: SEARCH_OPEN_NOW,
    payload: bool,
  }),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(SearchBarFilterCheckbox);
