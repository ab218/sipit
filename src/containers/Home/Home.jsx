import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { CafeCard, MapContainer } from '../../components';
import { loadPosition, makeFetchCafesThunk, getFavorites } from '../../redux/actions';
import { REDIRECT } from '../../redux/types';
import styles from './homeStyles';

class Home extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  componentDidMount = () => {
    const {
      loadPosition, getFavorites, cookies, cafesList,
    } = this.props;
    if (!cafesList) { loadPosition(); }
    return cookies.get('user') && getFavorites(cookies.get('user').id);
  }

  componentDidUpdate = () => {
    const { redirect, redirectFalse } = this.props;
    // this makes sure redirect gets set to false on home page on rerender
    // (in the case of searching)
    return redirect && redirectFalse();
  }

  render() {
    const { mainTheme } = styles;
    return (
      <div style={mainTheme}>
        <MapContainer />
        <CafeCard />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cafesList: state.fetchCafes.cafesList,
  redirect: state.redirect.redirect,
});

const dispatchAction = (dispatch, actionMaker) => (...args) => {
  dispatch(actionMaker(...args));
};

const mapDispatchToProps = dispatch => ({
  loadPosition: dispatchAction(dispatch, loadPosition),
  makeFetchCafes: dispatchAction(dispatch, makeFetchCafesThunk),
  getFavorites: dispatchAction(dispatch, getFavorites),
  redirectFalse: () => dispatch({ type: REDIRECT, payload: false }),
});

export default compose(
  withCookies,
  connect(mapStateToProps, mapDispatchToProps),
)(Home);
