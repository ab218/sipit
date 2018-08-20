import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const settings = require('../settings.json')

const style = {
  position: 'absolute',
  height: '15em',
  width: '80%',
  margin: 'auto',
}

const divStyle = {
  height: '100%',
  width: '100%',
  position: 'relative',
  top: '40%',
  zIndex: '10000',
  paddingBottom: '3em',
  paddingTop: '8em'
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

    const { myLatLng, google } = this.props

    return (
      <div style={divStyle}>
        <div style={divStyle2}>
          <Map google={google}
            zoom={12}
            style={style}
            initialCenter={{
              lat: myLatLng.lat,
              lng: myLatLng.lng
            }}
            center={{
              lat: myLatLng.lat,
              lng: myLatLng.lng
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
