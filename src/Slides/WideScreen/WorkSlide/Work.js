import React, { Component } from 'react';
import styled from 'styled-components';
import ImageContent from './ImageContent';
import TextContent from './TextContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px dashed red; */
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.3;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        buttonText: "",
        link: "",
      },
      {
        number: '01',
        projectName: 'Point Of Care',
        projectDesc: 'Your mobile diagnostic ally for chest, kidney and breast diseases using cutting-edge deep learning techniques. Offering top-tier online consultations with leading medical experts.',
        projectType: 'Flutter | Python | NodeJS | MongoDB | Stripe',
        roles: ['Mobile Development', 'Deep Learning'],
        buttonText: "Go To Project",
        link: "https://linktr.ee/pointofcare1",
      },
      {
        number: '02',
        projectName: 'Uber Clone',
        projectDesc: "The Uber clone app integrates Google Maps, Google Autocomplete, and Distance Matrix APIs to deliver precise routing, distance calculations, and fare estimates.",
        projectType: 'Flutter | Bloc | Google Maps | Google Autocomplete | Distance Matrix',
        roles: ['Mobile Development'],
        buttonText: "Go To Project",
        link: "https://github.com/HashirHamid/Uber-clone",
      },
      {
        number: '03',
        projectName: 'FineFound',
        projectDesc: 'An all-in-one app designed to connect users with a wide range of services, from dog grooming and barber appointments to plumbing assistance. It streamlines the process of finding and booking essential services, offering convenience and efficiency in one platform.',
        projectType: 'Flutter | Firebase | Provider',
        roles: ['Mobile Development'],
        buttonText: "Go To Project",
        
        link: "https://github.com/HashirHamid/finefound",
      },
      {
        number: '04',
        projectName: 'RERM',
        projectDesc: 'Real Estate Rental Management app offers a comprehensive solution for renters and rentees, facilitating property listings and communication. It streamlines rental processes and enhances the efficiency of property management tasks.',
        projectType: 'Mobile Development',
        roles: ['Flutter | Provider | Firebase | Angular'],
        buttonText: "Go To Project",
        link: "https://github.com/HashirHamid/RERM",
      },
      {
        number: '05',
        projectName: 'Make Your Burger',
        projectDesc: 'A fun app for creating a customized burger.',
        projectType: 'Flutter',
        roles: ['Mobile Development'],
        buttonText: "Go To Project",
        link: "https://github.com/HashirHamid/make-your-burger",

      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        buttonText: "",
        link: "",
      },
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState(
      {
        vh: Math.round(
          window.document.documentElement.clientHeight * this.pageSplitTimes,
        ),
      },
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;
    // console.log(scrollDistance);

    if (Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (slideNumber === this.workDetails.length - 1
      && (Math.floor(scrollDistance / vh) < slideNumber)) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        roles={this.workDetails[slideNumber].roles}
        buttonText={this.workDetails[slideNumber].buttonText}
        refreshToggle={refresh}
        link={this.workDetails[slideNumber].link}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;
