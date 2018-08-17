import React, { Component } from 'react';
import axios from 'axios'

const mainTheme = {
    backgroundColor: '#5d4427',
}

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    getBusiness(id) {
        axios
            .post(`/api/:id/business`, {
                location: this.state.myLatLng,
                id: id,
            })
            .then(res => {
                return this.setState({
                    ...this.state,
                    cafeData: res.data,
                })
            })
    }

    componentDidMount() {


    }

    render() {

        return (<div style={mainTheme}>
            <h1>
            </h1>
            {/* {yelpDataLoaded
                ? <CafeCard cafesList={cafesList} />
                : <h1 style={{ color: 'white' }}>Brewing results...</h1>
            } */}
        </div>
        )
    }
}


