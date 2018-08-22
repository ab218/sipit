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
            <div style={{ maxWidth: '500px', margin: 'auto' }}>
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
                <br />
                <h5 style={title}>{cafeData.display_phone}</h5>
                {/* nested ternary below, consider refactoring into something more readable */}
                {cafeData.hours
                    ? (cafeData.hours[0].is_open_now
                        ? <h5 style={{ color: 'lightgreen' }}>OPEN NOW (closes at {cafeData.hours[0].open[0].end})</h5>
                        : <h5 style={{ color: 'tomato' }}>CLOSED NOW</h5>
                    )
                    : <div>No hours posted</div>
                }
                <br />
            </div>
        )
    }
}

export default BusinessDetails;