import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const settings = require('../settings.json')

const style = {
  position: 'absolute',
  height: '30em',
  width: '24em',
}

const divStyle = {
  height: '100%',
  width: '100%',
  position: 'fixed',
  top: '10%',
  zIndex: '10000'
}

const divStyle2 = {
  height: '100%',
  width: '100%',
  position: 'relative',
  marginLeft: '10px',
  marginRight: '10px',
}


export class MapContainer extends Component {
  constructor(props) {
    super(props);

  }


  render() {


    return (
      <div style={divStyle}>
        <div style={divStyle2}>
          <Map google={this.props.google}
            zoom={12}
            style={style}
            initialCenter={{
              lat: this.props.myLatLng.lat,
              lng: this.props.myLatLng.lng
            }}
            center={{
              lat: this.props.myLatLng.lat,
              lng: this.props.myLatLng.lng
            }}
          >

            {this.props.cafesList.map((markers, i) =>
              <Marker key={i}
                name={markers.name}
                position={{
                  lat: markers.coordinates.latitude,
                  lng: markers.coordinates.longitude
                }}
                label={(i + 1).toString()}
              />
            )}
            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
              </div>
            </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: settings['GOOGLE_API_KEY']
})(MapContainer)
