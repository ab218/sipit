import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
  position: 'absolute',
  height: '50%',
  width: '25%',
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

  render() {
    return (
      <div style={divStyle}>
        <div style={divStyle2}>
          <Map google={this.props.google}
            zoom={12}
            style={style}
            initialCenter={{
              lat: 49.2827,
              lng: -123.1207
            }}
          >

            {this.props.cafesList.map((markers, i) =>
              <Marker key={i}
                name={markers.name}
                position={{
                  lat: markers.coordinates.latitude,
                  lng: markers.coordinates.longitude
                }}
                icon={{
                  url: markers.image_url,
                  anchor: new google.maps.Point(32,32),
                  scaledSize: new google.maps.Size(64,64)
                }}
              />
            )}
            <Marker onClick={this.onMarkerClick}
              name={'Current location'} />

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
  apiKey: 'AIzaSyB7aANaU0tj9Bsf1Uzmhhgw-YhrNlp4trA'
})(MapContainer)

// import React, {Component} from 'react';
// import Map from './Map.jsx';
// import {GoogleApiWrapper} from 'google-maps-react';

// export class Container extends Component {
//     render() {

//         const style = {
//             width: '100vw',
//             height: '100vh'
//           }
//       if (!this.props.loaded) {
//         return <div>Loading...</div>
//       }
//       return (
//         <div>
//         <Map google={this.props.google} />
//       </div>
//       )
//     }
//   }

//   export default GoogleApiWrapper({
//     apiKey: 'AIzaSyB7aANaU0tj9Bsf1Uzmhhgw-YhrNlp4trA'
//   })(Container)