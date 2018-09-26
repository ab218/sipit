import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import SlickCarousel from './SlickCarousel';

const title = {
  color: 'grey',
  fontWeight: 'bold',
};

function HoursComp({ isOpenNow, endHours }) {
  if (isOpenNow) {
    return (
      <h5 style={{ color: 'lightgreen' }}>
        OPEN NOW (closes at
        {' '}
        {endHours}
        )
      </h5>);
  }
  return <h5 style={{ color: 'tomato' }}>CLOSED NOW</h5>;
}

class BusinessDetails extends React.Component {
  render() {
    const { businessData } = this.props;

    return (
      <div style={{ maxWidth: '500px', margin: 'auto' }}>
        <h1 style={title}>
          {businessData.name}
        </h1>
        <SlickCarousel businessData={businessData} />
        {
          businessData.location.display_address
            .map(sub => <h5 style={title} key={sub}>{sub}</h5>)
        }
        <br />
        <h5 style={title}>{businessData.display_phone}</h5>
        {businessData.hours
            && (
              <HoursComp
                isOpenNow={businessData.hours[0].is_open_now}
                endHours={businessData.hours[0].open[0].end}
              />
            )
        }
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  businessData: state.fetchBusinessData.businessData,
});

export default compose(
  connect(mapStateToProps, null),
)(BusinessDetails);
