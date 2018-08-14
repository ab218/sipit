import React, {Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
class Stars extends Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div>
        <StarRatingComponent 
          starCount={5}
          value={this.props.starRating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

export default Stars;

