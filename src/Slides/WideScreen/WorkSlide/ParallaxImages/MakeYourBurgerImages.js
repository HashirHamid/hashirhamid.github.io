import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import burgerImg from '../../../../Assets/Images/MakeYourBurger/burgerScreen.png';
import mainImg from '../../../../Assets/Images/MakeYourBurger/mainScreen.png';

const CustomerDetail = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 12}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-75vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
height: 90vh;
`;

const Customers = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 7}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-55vh;
right: 5vw;
position: absolute;
/* border: 1px dashed red; */
height: 90vh;
`;

class MakeYourBurgerImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    // console.log('WMF scrollOffsetPercent ', scrollOffsetInPercent);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <CustomerDetail src={mainImg} scroll={scrollPercent} alt="customerDetails" />
        <Customers src={burgerImg} scroll={scrollPercent} alt="customers" />
      </React.Fragment>
    );
  }
}

MakeYourBurgerImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default MakeYourBurgerImages;
