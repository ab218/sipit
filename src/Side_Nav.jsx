import React, { Component } from 'react';
import MapContainer from './Map_Container.jsx';

const sideNav = {
    height: '100%', /* Full-height: remove this if you want "auto" height */
    width: '400px', /* Set the width of the sidebar */
    position: 'fixed', /* Fixed Sidebar (stay in place on scroll) */
    zIndex: '1', /* Stay on top */
    top: '0', /* Stay at the top */
    right: '0',
    overflowX: 'hidden', /* Disable horizontal scroll */
    paddingTop: '20px'
}


class SideNav extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={sideNav} >
            <MapContainer />
            </div>
        );
    }
}

export default SideNav;
