
import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  Map, InfoWindow, Marker, GoogleApiWrapper,
} from 'google-maps-react';


const style = {
  position: 'absolute',
  height: '15em',
  width: '80%',
  margin: 'auto',
  border: '5px solid #5d4427',
  borderRadius: '15px',
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
  borderRadius: '15px',
};


class MapContainer extends Component {
  render() {
    const { myLatLng: { lat, lng }, google, cafesList } = this.props;
    return (
      <div style={divStyle}>
        <Map
          google={google}
          zoom={12}
          style={style}
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
          <InfoWindow onClose={this.onInfoWindowClose} />
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
