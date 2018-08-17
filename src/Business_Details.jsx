import React from 'react';


class BusinessDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1>
                    {this.props.cafeData.name}
                </h1>
                <img src={this.props.cafeData.image_url} />
            </div>
        )
    }
}

export default BusinessDetails;