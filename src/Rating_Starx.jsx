import React, {Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
class Stars extends Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1
    };
  }
 
 
  render() {
    
    return (                
      <div style={{fontSize: 24}}>
          <StarRatingComponent
            name="app6"
            starColor="#ffb400"
            emptyStarColor="#ffb400"
            value={this.props.starRating}
            renderStarIcon={(index, value) => {
              return (
                <span>
                  <i className={index <= value ? 'fas fa-star' : 'far fa-star'} />
                </span>
              );
            }}
            renderStarIconHalf={() => {
              return (
                <span>
                  <span style={{position: 'absolute'}}><i className="far fa-star" /></span>
                  <span><i className="fas fa-star-half" /></span>
                </span>
              );
            }} />
        </div>

    );
  }
}

export default Stars;

