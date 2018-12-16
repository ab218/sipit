import axios from 'axios';
import { CardActions } from '@material-ui/core';
import {
  ADD_ERROR, FETCH_BUSINESS_DATA, FETCH_BUSINESS_DATA_LOADING,
  FETCH_CAFES, FETCH_CAFES_LOADING, FETCH_FAVORITES,
  FETCH_REVIEWS_DATA, FETCH_REVIEWS_DATA_LOADING,
  FETCH_YELP_REVIEWS_DATA, FETCH_YELP_REVIEWS_DATA_LOADING,
  GET_POSITION, REDIRECT, RECENTER_MAP,
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

export function getReviews(cafeId) {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_REVIEWS_DATA_LOADING, payload: true });
      const reviews = await axios.get(`/api/reviews/${cafeId}`);
      dispatch({ type: FETCH_REVIEWS_DATA, payload: reviews.data });
      dispatch({ type: FETCH_REVIEWS_DATA_LOADING, payload: false });
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
      searchFields: {
        searchLocation: location, searchName: term, searchResults: limit, searchRadius: radius,
        searchOpenNow: open_now, searchSortBy: sort_by,
      },
      getPosition: { myLatLng: latLng },
    } = getState();
    try {
      dispatch({ type: FETCH_CAFES_LOADING, payload: true });
      const searchParams = {
        term, limit, radius, open_now, sort_by,
      };
      if (!location || location === ' ') {
        searchParams.latLng = latLng;
      } else {
        searchParams.location = location;
      }
      const cardLocation = await axios.post('/api/yelp/loc', searchParams);
      const { latitude: lat, longitude: lng } = cardLocation.data[0].coordinates;
      await dispatch({ type: RECENTER_MAP, payload: { lat, lng } });
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
      if (err.code <= 3) {
        await dispatch({ type: GET_POSITION, payload: { lat: 49.27, lng: -123.12 } });
        await dispatch(makeFetchCafesThunk());
        console.log('loading default position');
      }
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

export function getYelpReviews(params) {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_YELP_REVIEWS_DATA_LOADING, payload: true });
      const yelpReviewsData = await axios.get(`/api/yelp/${params}/reviews`);
      dispatch({ type: FETCH_YELP_REVIEWS_DATA, payload: yelpReviewsData.data });
      dispatch({ type: FETCH_YELP_REVIEWS_DATA_LOADING, payload: false });
    } catch (err) {
      console.log(err);
      dispatch({ type: ADD_ERROR, error: err });
    }
  };
}

export function searchCafes(e) {
  return async (dispatch) => {
    e.preventDefault();
    dispatch(makeFetchCafesThunk());
    dispatch({ type: REDIRECT, payload: true });
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
        title: cafe.name,
        url: cafe.id,
        image_url: cafe.image_url,
        user_id: userId,
        coords: cafe.coordinates,
      });
      dispatch(getFavorites(userId));
    } catch (err) {
      console.log(err);
      dispatch({ type: ADD_ERROR, error: err });
    }
  };
}

export function postReview(title, body, rating, cafe_id, user_id) {
  return async (dispatch) => {
    try {
      await axios.post('/api/reviews/add', {
        title,
        body,
        rating,
        cafe_id,
        user_id,
      });
      console.log('sent');
    } catch (e) {
      console.log(e);
      dispatch({ type: ADD_ERROR, error: e });
    }
  };
}

// export function loginSubmit(email, password, cookies, redirectTrue) {
//   return async (dispatch) => {
//     try {
//       const login = await axios.post('/api/login', { email, password });
//       if (login.data.message !== 'successful login') {
//         return this.setState({ wentWrong: true });
//       }
//       cookies.set('user', login.data.user[0]);
//       return redirectTrue();
//     } catch (err) {
//       console.log(err);
//     }
//     return null;
//   };
// }
