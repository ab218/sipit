import React, { Component } from 'react';
import axios from 'axios'
import BusinessDetails from './Business_Details.jsx'
import Reviews from './Reviews.jsx'

const mainTheme = {
    backgroundColor: '#5d4427',
}

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yelpDataLoaded: false,
            reviewsLoaded: false,
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

    getReviews() {
        axios
            .get(`/api/business/${this.props.match.params.id}/reviews`, {
            })
            .then(res => {
                return this.setState({
                    ...this.state,
                    reviewsLoaded: true,
                    reviewsData: res.data,
                })
            })
    }

    componentDidMount() {

        this.getBusiness()
        this.getReviews()
    }

    render() {
        const { yelpDataLoaded, cafeData, reviewsLoaded, reviewsData } = this.state

        return (<div style={mainTheme}>
            {yelpDataLoaded
                ? <BusinessDetails cafeData={cafeData} />
                : <h1 style={{ color: 'white' }}>Brewing results ...</h1>
            }
            {reviewsLoaded
            ? <Reviews reviewsData={reviewsData} />
            : <h1 style={{ color: 'white' }}>Brewing reviews ...</h1>
            }
        </div>
        )
    }
}


