
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import styles from './favoritesMapContainerStyles';

const FavoritesMapContainer = ({
  google, favorites, recenterFavoritesMap, zoom,
}) => {
  const { divStyle, main } = styles;

  return (
    <React.Fragment>
      {favorites.length
      && (
        <div style={divStyle}>
          <Map
            google={google}
            zoom={zoom || 2}
            style={main}
            initialCenter={{
              lat: recenterFavoritesMap.lat || favorites[0].lat,
              lng: recenterFavoritesMap.lng || favorites[0].lng,
            }}
            center={{
              lat: recenterFavoritesMap.lat || favorites[0].lat,
              lng: recenterFavoritesMap.lng || favorites[0].lng,
            }}
          >
            {favorites.map((marker, i) => (
              <Marker
                key={marker.id}
                name={marker.name}
                position={{
                  lat: marker.lat,
                  lng: marker.lng,
                }}
                label={(i + 1).toString()}
              />
            ))}
          </Map>
        </div>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  favorites: state.fetchFavorites.favorites,
  recenterFavoritesMap: state.recenterMap.favLatLng,
  zoom: state.recenterMap.zoom,
});

export default compose(
  GoogleApiWrapper({
    apiKey: process.env.GOOGLE_API_KEY,
  }),
  connect(mapStateToProps, null),
)(FavoritesMapContainer);
