
import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import styles from '../styles/mapContainerStyles';

class MapContainer extends Component {
  render() {
    const { myLatLng: { lat, lng }, google, cafesList } = this.props;
    const { divStyle, main } = styles;
    return (
      <div style={divStyle}>
        <Map
          google={google}
          zoom={12}
          style={main}
          initialCenter={{
            lat, lng,
          }}
          center={{
            lat, lng,
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
  }
}

const mapStateToProps = state => ({
  cafesList: state.fetchCafes.cafesList,
  myLatLng: state.getPosition.myLatLng,
});

export default compose(
  GoogleApiWrapper({
    apiKey: process.env.GOOGLE_API_KEY,
  }),
  connect(mapStateToProps, null),
)(MapContainer);
