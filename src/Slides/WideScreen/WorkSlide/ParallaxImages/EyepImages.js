import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import eyepIphoneImg from '../../../../Assets/Images/RERM/1.png';
import eyepTabletImg from '../../../../Assets/Images/RERM/2.png';
import eyepTablet1Img from '../../../../Assets/Images/RERM/4.png';


const Iphone = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 10}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-70vh;
left: 0vw;
/* border: 1px dashed red; */
height: 80vh;
`;

const Tablet = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.94)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -40vh;
right:0vw;
/* border: 1px dashed red; */
height: 80vh; 
filter: blur(0.6px);
`;


const Lock = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 4}%) scale(0.65)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-80vh;
right: 10vw;
transform-origin: right center;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(1.5px);
`;

class EyepImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    scrollPercent -= scrollOffsetInPercent;

    return (
      <React.Fragment>
        <Lock src={eyepTablet1Img} scroll={scrollPercent} alt="eyepTablet1" />
        <Tablet src={eyepTabletImg} scroll={scrollPercent} alt="eyepTablet" />
        <Iphone src={eyepIphoneImg} scroll={scrollPercent} alt="eyepIphone" />
      </React.Fragment>
    );
  }
}

EyepImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default EyepImages;
