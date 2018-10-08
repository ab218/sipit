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
      const position = await getCurrentPosition();
      const { latitude, longitude } = position.coords;
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
    let cardLocation;
    try {
      dispatch({ type: 'FETCH_CAFES_LOADING', payload: true });
      if (!location || location === ' ') {
        cardLocation = await axios.post('/api/yelp/loc', { term, limit, latLng });
      } else {
        cardLocation = await axios.post('/api/yelp/loc', { term, limit, location });
      }
      const { latitude, longitude } = cardLocation.data[0].coordinates;
      dispatch(getPosition(latitude, longitude));
      dispatch({ type: 'FETCH_CAFES', payload: cardLocation.data });
      dispatch({ type: 'FETCH_CAFES_LOADING', payload: false });
    } catch (error) {
      console.log('Error', error);
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

export function searchCafes(e, cafeSearch, locationSearch, resultsSearch, myLatLng, page) {
  return async (dispatch) => {
    e.preventDefault();
    if (locationSearch === '') {
      dispatch(makeFetchCafesThunk(cafeSearch, resultsSearch, myLatLng));
    } else {
      dispatch(makeFetchCafesThunk(cafeSearch, resultsSearch, locationSearch));
    }
    if (page !== 'home') {
      dispatch({ type: 'REDIRECT', payload: true });
    }
  };
}

export function removeFavorite(cafeId, userId) {
  return async (dispatch) => {
    try {
      await axios.delete('/api/favorites/delete', { data: { url: cafeId, user_id: userId } });
      dispatch(getFavorites(userId));
    } catch (error) {
      console.log(error);
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
    } catch (error) {
      console.log(error);
    }
  };
}
