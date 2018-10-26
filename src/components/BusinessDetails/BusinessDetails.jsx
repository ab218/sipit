import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SlickCarousel, BusinessDetailsHours } from '..';
import styles from './businessDetailsStyles';

const HoursComp = ({ hours }) => (
  hours.is_open_now
    ? <h5 style={styles.open}>{`OPEN NOW (closes at: ${hours.open[0].end})`}</h5>
    : <h5 style={styles.close}>CLOSED NOW</h5>
);

const DisplayAddress = ({ businessData }) => (
  businessData.location.display_address
    .map(address => <h5 style={styles.address} key={address}>{address}</h5>)
);

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
      <DisplayAddress businessData={businessData} />
      <br />
      <h5 style={title}>{businessData.display_phone}</h5>
      <HoursComp hours={businessData.hours[0]} />
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
