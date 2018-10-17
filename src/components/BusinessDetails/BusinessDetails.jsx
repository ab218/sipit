import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SlickCarousel } from '..';
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
  const { businessData } = props;
  const { container, title } = styles;
  return (
    <div style={container}>
      <h3 style={title}>
        {businessData.name}
      </h3>
      <SlickCarousel businessData={businessData} />
      <br />
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
};

const mapStateToProps = state => ({
  businessData: state.fetchBusinessData.businessData,
});

export default compose(
  connect(mapStateToProps, null),
)(BusinessDetails);
