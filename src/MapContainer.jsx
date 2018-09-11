
import React, { Component } from 'react';
import {
  Map, InfoWindow, Marker, GoogleApiWrapper,
} from 'google-maps-react';


const style = {
  position: 'absolute',
  height: '15em',
  width: '80%',
  margin: 'auto',
};

const divStyle = {
  height: '100%',
  width: '100%',
  position: 'relative',
  top: '40%',
  zIndex: '2',
  paddingBottom: '3em',
  paddingTop: '0em',
  marginBottom: '10em',
};


export class MapContainer extends Component {
  render() {
    const { myLatLng, google, cafesList } = this.props;

    return (
      <div style={divStyle}>

        <Map
          google={google}
          zoom={12}
          style={style}
          initialCenter={{
            lat: myLatLng.lat,
            lng: myLatLng.lng,
          }}
          center={{
            lat: myLatLng.lat,
            lng: myLatLng.lng,
          }}
        >
          {cafesList.map((markers, i) => (
            <Marker
              key={i}
              name={markers.name}
              position={{
                lat: markers.coordinates.latitude,
                lng: markers.coordinates.longitude,
              }}
              label={(i + 1).toString()}
            />
          ))}
          <InfoWindow onClose={this.onInfoWindowClose}>
            <div />
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY,
})(MapContainer);
