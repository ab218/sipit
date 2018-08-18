import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const title = {
    color: 'white',

}

class BusinessDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        const { cafeData } = this.props

        return (
            <div style={{maxWidth: '500px', margin: 'auto'}}>
                <h1 style={title}>
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
                        <h5 style={title} key={subindex}>{sub}</h5>)
                }
                <div>_</div>
            </div>
        )
    }
}

export default BusinessDetails;