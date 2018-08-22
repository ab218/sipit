import React, { Component } from 'react';
import axios from 'axios'
import BusinessDetails from './Business_Details.jsx'

const mainTheme = {
    backgroundColor: '#5d4427',
}

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yelpDataLoaded: false,
        }
    }

    getBusiness() {
        axios
            .get(`/api/business/${this.props.match.params.id}/details`, {
            })
            .then(res => {
                return this.setState({
                    ...this.state,
                    yelpDataLoaded: true,
                    cafeData: res.data,
                })
            })
    }

    componentDidMount() {

        this.getBusiness()

    }

    render() {
        const { yelpDataLoaded, cafeData } = this.state

        return (<div style={mainTheme}>
            {yelpDataLoaded
                ? <BusinessDetails cafeData={cafeData} />
                : <h1 style={{ color: 'white' }}>Brewing results...</h1>
            }
        </div>
        )
    }
}


