import React from 'react';
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
    const { cafeData } = this.props;

    return (
      <div style={{ maxWidth: '500px', margin: 'auto' }}>
        <h1 style={title}>
          {cafeData.name}
        </h1>
        <SlickCarousel cafeData={cafeData} />
        {
          cafeData.location.display_address
            .map(sub => <h5 style={title} key={sub}>{sub}</h5>)
        }
        <br />
        <h5 style={title}>{cafeData.display_phone}</h5>
        {cafeData.hours
            && (
              <HoursComp
                isOpenNow={cafeData.hours[0].is_open_now}
                endHours={cafeData.hours[0].open[0].end}
              />
            )
        }
        <br />
      </div>
    );
  }
}

export default BusinessDetails;
