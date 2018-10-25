import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SlickCarousel, BusinessDetailsHours } from '..';
import styles from './businessDetailsStyles';

// const getDay = () => new Date().getDay() - 1;

function HoursComp({ isOpenNow, endHours }) {
  const { open, close } = styles;
  if (isOpenNow) {
    return (
      <h5 style={open}>
        {`OPEN NOW (closes at: ${endHours})`}
      </h5>);
  }
  return <h5 style={close}>CLOSED NOW</h5>;
}

const BusinessDetails = (props) => {
  const { businessData, businessDataLoading } = props;
  const { container, title, loading } = styles;

  if (businessDataLoading) {
    return <h1 style={loading}>Brewing results ...</h1>;
  }

  return (
    <div style={container}>
      <h3 style={title}>{businessData.name}</h3>
      <SlickCarousel businessData={businessData} />
      <br />
      {businessData.location.display_address
        .map(address => <h5 style={title} key={address}>{address}</h5>)}
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
      <BusinessDetailsHours hours={businessData.hours[0].open} />
    </div>
  );
};

const mapStateToProps = state => ({
  businessData: state.fetchBusinessData.businessData,
  businessDataLoading: state.fetchBusinessData.businessDataLoading,
});

export default compose(
  connect(mapStateToProps, null),
)(BusinessDetails);
