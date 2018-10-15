import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SEARCH_RADIUS } from '../../redux/types';

const styles = {
  root: {
    width: 300,
  },
  slider: {
    padding: '22px 0px',
  },
};

function distConverter(dist) {
  if (dist < 1000) {
    return `${dist} m`;
  }
  return `${dist / 1000} km`;
}

class SearchBarFilterSlider extends React.Component {
  handleChange = (event, value) => {
    const { setRadius } = this.props;
    setRadius(value);
  };

  render() {
    const { classes, searchRadius } = this.props;
    return (
      <div className={classes.root}>
        <Typography id="label">
Set Radius:
          {' '}
          {distConverter(searchRadius)}
        </Typography>
        <Slider
          classes={{ container: classes.slider }}
          value={searchRadius}
          aria-labelledby="label"
          onChange={this.handleChange}
          max={10000}
          min={100}
          step={100}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchRadius: state.searchFields.searchRadius,
});

const mapDispatchToProps = dispatch => ({
  setRadius: results => dispatch({
    type: SEARCH_RADIUS,
    payload: results,
  }),
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(SearchBarFilterSlider);
