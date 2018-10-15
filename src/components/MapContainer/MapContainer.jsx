
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import styles from './mapContainerStyles';

const MapContainer = (props) => {
  const {
    myLatLng, recenter, google, cafesList,
  } = props;
  const { divStyle, main } = styles;
  // note added asd pleas fail ugh
  return (
    <div style={divStyle}>
      <Map
        google={google}
        zoom={12}
        style={main}
        initialCenter={{
          lat: recenter.lat || myLatLng.lat,
          lng: recenter.lng || myLatLng.lng,
        }}
        center={{
          lat: recenter.lat || myLatLng.lat,
          lng: recenter.lng || myLatLng.lng,
        }}
      >
        {cafesList.map((marker, i) => (
          <Marker
            key={marker.id}
            name={marker.name}
            position={{
              lat: marker.coordinates.latitude,
              lng: marker.coordinates.longitude,
            }}
            label={(i + 1).toString()}
          />
        ))}
      </Map>
    </div>
  );
};

const mapStateToProps = state => ({
  cafesList: state.fetchCafes.cafesList,
  myLatLng: state.getPosition.myLatLng,
  recenter: state.recenterMap.myLatLng,
});

export default compose(
  GoogleApiWrapper({
    apiKey: process.env.GOOGLE_API_KEY,
  }),
  connect(mapStateToProps, null),
)(MapContainer);
