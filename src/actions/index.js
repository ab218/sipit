import axios from 'axios';

function getPosition(lat, lng) {
  return {
    type: 'GET_POSITION',
    payload: {
      lat,
      lng,
    },
  };
}

export function getFavorites(userId) {
  return async (dispatch) => {
    try {
      const favorites = await axios.get(`/api/favorites/${userId}`);
      dispatch({ type: 'FETCH_FAVORITES', payload: favorites.data });
    } catch (error) {
      console.log(error);
    }
  };
}

const getCurrentPosition = (options = { timeout: 10000, maximumAge: 3600000 }) => new
Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject, options);
});

export function loadPosition() {
  return async (dispatch) => {
    try {
      console.log('trying to get geoposition...');
      const position = await getCurrentPosition();
      const { latitude, longitude } = position.coords;
      console.log(`got it! At: ${latitude}, ${longitude}`);
      dispatch(getPosition(latitude, longitude));
    } catch (error) {
      console.log('failed to get position.', error);
    }
  };
}

export function makeFetchCafesThunk(term, limit) {
  return async (dispatch, getState) => {
    const {
      searchFields: { searchLocation: location },
      getPosition: { myLatLng: latLng },
    } = getState();
    if (!location || location === ' ') {
      try {
        dispatch({ type: 'FETCH_CAFES_LOADING', payload: true });
        const cardLocation = await axios.post('/api/yelp/latlng', { term, limit, latLng });
        const { latitude, longitude } = cardLocation.data[0].coordinates;
        dispatch({ type: 'FETCH_CAFES', payload: cardLocation.data });
        dispatch({ type: 'FETCH_CAFES_LOADING', payload: false });
        dispatch(getPosition(latitude, longitude));
      } catch (error) {
        console.log('Error', error);
      }
    } else {
      try {
        dispatch({ type: 'FETCH_CAFES_LOADING', payload: true });
        const cardLocation = await axios.post('/api/yelp/loc', { term, limit, location });
        const { latitude, longitude } = cardLocation.data[0].coordinates;
        dispatch({ type: 'FETCH_CAFES', payload: cardLocation.data });
        dispatch({ type: 'FETCH_CAFES_LOADING', payload: false });
        dispatch(getPosition(latitude, longitude));
      } catch (error) {
        console.log('Error', error);
      }
    }
  };
}

export function getBusinessData(params) {
  return async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_BUSINESS_DATA_LOADING', payload: true });
      const businessDetails = await axios.get(`/api/yelp/${params}/details`);
      dispatch({ type: 'FETCH_BUSINESS_DATA', payload: businessDetails.data });
      dispatch({ type: 'FETCH_BUSINESS_DATA_LOADING', payload: false });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getReviews(params) {
  return async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_REVIEWS_DATA_LOADING', payload: true });
      const reviewsData = await axios.get(`/api/yelp/${params}/reviews`);
      dispatch({ type: 'FETCH_REVIEWS_DATA', payload: reviewsData.data });
      dispatch({ type: 'FETCH_REVIEWS_DATA_LOADING', payload: false });
    } catch (error) {
      console.log(error);
    }
  };
}
