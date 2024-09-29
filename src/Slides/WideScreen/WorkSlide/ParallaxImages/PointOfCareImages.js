import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import appointmentImg from '../../../../Assets/Images/PointOfCare/Appointment.png';
import diagnosisImg from '../../../../Assets/Images/PointOfCare/Diagnosis.png';
import mainImg from '../../../../Assets/Images/PointOfCare/Main.png';


const PointOfCarePhoneUQ = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
top: 90vh;
left:0vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const PointOfCarePhonePLST = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
top:75vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.8px);
`;

const PointOfCarePhoneGU2 = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
top: 55vh;
right: 5vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(1.2px);
`;

class PointOfCareImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
      <PointOfCarePhoneUQ src={mainImg} scroll={scrollPercent} alt="PointOfCareUQ" />
      <PointOfCarePhonePLST src={diagnosisImg} scroll={scrollPercent} alt="PointOfCarePLST" />
      <PointOfCarePhoneGU2 src={appointmentImg} scroll={scrollPercent} alt="PointOfCareGU2" />
      </React.Fragment>
    );
  }
}

PointOfCareImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default PointOfCareImages;
