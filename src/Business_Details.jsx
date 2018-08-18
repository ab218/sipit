import React from 'react';


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
                {
                    cafeData.photos.map((sub, subindex) =>
                        <img key={subindex} src={sub} />)
                }
                {
                    cafeData.location.display_address.map((sub, subindex) =>
                        <h5 key={subindex}>{sub}</h5>)
                }
            </div>
        )
    }
}

export default BusinessDetails;