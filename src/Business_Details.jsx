import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";




class BusinessDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        const { cafeData } = this.props

        return (
            <div>
                <h1>
                    {cafeData.name}
                </h1>
                <Carousel>
                    {
                        cafeData.photos.map((sub, subindex) =>
                            <div key={subindex}>
                                <img src={sub} />
                                <p className="legend">Picture {subindex + 1}</p>
                            </div>
                        )
                    }
                </Carousel>
                {
                    cafeData.location.display_address.map((sub, subindex) =>
                        <h5 key={subindex}>{sub}</h5>)
                }
            </div>
        )
    }
}

export default BusinessDetails;