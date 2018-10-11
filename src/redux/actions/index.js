import axios from 'axios';
import {
  ADD_ERROR, FETCH_BUSINESS_DATA, FETCH_BUSINESS_DATA_LOADING,
  FETCH_CAFES, FETCH_CAFES_LOADING, FETCH_FAVORITES,
  FETCH_REVIEWS_DATA, FETCH_REVIEWS_DATA_LOADING, GET_POSITION, REDIRECT,
} from '../types';

export function getFavorites(userId) {
  return async (dispatch) => {
    try {
      const favorites = await axios.get(`/api/favorites/${userId}`);
      dispatch({ type: FETCH_FAVORITES, payload: favorites.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: ADD_ERROR, error: err });
    }
  };
}

const getCurrentPosition = (options = { timeout: 10000, maximumAge: 3600000 }) => new
Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject, options);
});

export function makeFetchCafesThunk() {
  return async (dispatch, getState) => {
    const {
      searchFields: { searchLocation: location, searchName: term, searchResults: limit },
      getPosition: { myLatLng: latLng },
    } = getState();
    let cardLocation;
    try {
      dispatch({ type: FETCH_CAFES_LOADING, payload: true });
      if (!location || location === ' ') {
        cardLocation = await axios.post('/api/yelp/loc', { term, limit, latLng });
      } else {
        cardLocation = await axios.post('/api/yelp/loc', { term, limit, location });
      }
      const { latitude: lat, longitude: lng } = cardLocation.data[0].coordinates;
      await dispatch({ type: GET_POSITION, payload: { lat, lng } });
      dispatch({ type: FETCH_CAFES, payload: cardLocation.data });
      dispatch({ type: FETCH_CAFES_LOADING, payload: false });
    } catch (err) {
      console.log('Error', err);
      dispatch({ type: ADD_ERROR, error: err });
    }
  };
}

export function loadPosition() {
  return async (dispatch) => {
    try {
      const position = await getCurrentPosition();
      const { latitude: lat, longitude: lng } = position.coords;
      await dispatch({ type: GET_POSITION, payload: { lat, lng } });
      await dispatch(makeFetchCafesThunk());
    } catch (err) {
      console.log('failed to get position.', err);
      dispatch({ type: ADD_ERROR, error: err });
    }
  };
}

export function getBusinessData(params) {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_BUSINESS_DATA_LOADING, payload: true });
      const businessDetails = await axios.get(`/api/yelp/${params}/details`);
      dispatch({ type: FETCH_BUSINESS_DATA, payload: businessDetails.data });
      dispatch({ type: FETCH_BUSINESS_DATA_LOADING, payload: false });
    } catch (err) {
      console.log(err);
      dispatch({ type: ADD_ERROR, error: err });
    }
  };
}

export function getReviews(params) {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_REVIEWS_DATA_LOADING, payload: true });
      const reviewsData = await axios.get(`/api/yelp/${params}/reviews`);
      dispatch({ type: FETCH_REVIEWS_DATA, payload: reviewsData.data });
      dispatch({ type: FETCH_REVIEWS_DATA_LOADING, payload: false });
    } catch (err) {
      console.log(err);
      dispatch({ type: ADD_ERROR, error: err });
    }
  };
}

export function searchCafes(e, cafeSearch, locationSearch, resultsSearch, myLatLng, page) {
  return async (dispatch) => {
    e.preventDefault();
    if (locationSearch === '') {
      dispatch(makeFetchCafesThunk(cafeSearch, resultsSearch, myLatLng));
    } else {
      dispatch(makeFetchCafesThunk(cafeSearch, resultsSearch, locationSearch));
    }
    if (page !== 'home') {
      dispatch({ type: REDIRECT, payload: true });
    }
  };
}

export function removeFavorite(cafeId, userId) {
  return async (dispatch) => {
    try {
      await axios.delete('/api/favorites/delete', { data: { url: cafeId, user_id: userId } });
      dispatch(getFavorites(userId));
    } catch (err) {
      console.log(err);
      dispatch({ type: ADD_ERROR, error: err });
    }
  };
}

export function addFavorite(cafe, userId) {
  return async (dispatch) => {
    try {
      await axios.post('/api/favorites/add', {
        title: cafe.name, url: cafe.id, image_url: cafe.image_url, user_id: userId,
      });
      dispatch(getFavorites(userId));
    } catch (err) {
      console.log(err);
      dispatch({ type: ADD_ERROR, error: err });
    }
  };
}
