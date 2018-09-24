import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import BusinessDetails from './BusinessDetails';
import Reviews from './Reviews';

const mainTheme = {
//  backgroundColor: '#DFDCE3',
  backgroundColor: '#FFFF',
  fontFamily: 'Quicksand',

};

export default class Business extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yelpDataLoaded: false,
      reviewsLoaded: false,
    };
  }

  componentDidMount() {
    this.getBusiness();
    this.getReviews();
  }

  getBusiness() {
    const { match } = this.props;
    axios
      .get(`/api/yelp/${match.params.id}/details`, {
      })
      .then(res => this.setState({
        yelpDataLoaded: true,
        cafeData: res.data,
      }));
  }

  getReviews() {
    const { match } = this.props;
    axios
      .get(`/api/yelp/${match.params.id}/reviews`, {
      })
      .then(res => this.setState({
        reviewsLoaded: true,
        reviewsData: res.data,
      }));
  }


  render() {
    const {
      yelpDataLoaded, cafeData, reviewsLoaded, reviewsData,
    } = this.state;

    return (
      <div style={mainTheme}>
        <Navbar
          page="business"
        />
        {yelpDataLoaded
          ? <BusinessDetails cafeData={cafeData} />
          : <h1 style={{ color: 'grey' }}>Brewing results ...</h1>
        }
        {reviewsLoaded
          ? <Reviews reviewsData={reviewsData} />
          : <h1 style={{ color: 'grey' }}>Brewing reviews ...</h1>
        }
      </div>
    );
  }
}
