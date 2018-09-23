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

// export function addFavorite(cafe) {
//   return async () => {
//     try {
//       await axios.post('/api/favorites/add', { title: cafe.name, url: cafe.id, user_id: 1 });
//       console.log('favorited');
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

// export function removeFavorite(cafe) {
//   return async () => {
//     try {
//       await axios.delete('/api/favorites/delete', { data: { url: cafe.id, user_id: 1 } });
//       console.log('favorite deleted');
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

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