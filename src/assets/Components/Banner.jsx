import React from 'react';
import { createMedia } from '@artsy/fresnel';
import { Container, Image, Button, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../../css/Banner.css';

// Definición de breakpoints
const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

// Definición de DesktopBanner
const DesktopBanner = ({ banner }) => (
  <Container fluid className="bannerContainer">
    <Image src={banner[0]} fluid className="bannerImage" />
    <Header size='huge' inverted color='orange' className="centeredText" as='h1' textAlign='center'>
      Welcome to our store
    </Header>
    <Button inverted color='orange' size='large' className="centeredButton">Click Here</Button>
  </Container>
);

// Definición de MobileBanner
const MobileBanner = ({ banner }) => (
  <Container fluid className="bannerContainer">
    <Image src={banner[0]} fluid className="bannerImage" />
    <Header size='huge' inverted color='orange' className="centeredText" as='h1' textAlign='center'>
      Welcome to our store
    </Header>
    <Button inverted color='orange' size='medium' className="centeredButton">Click Here</Button>
  </Container>
);

DesktopBanner.propTypes = {
  banner: PropTypes.array.isRequired,
};

MobileBanner.propTypes = {
  banner: PropTypes.array.isRequired,
};

// Contenedor Responsive
const ResponsiveBanner = ({ banner }) => (
  <MediaContextProvider>
    <Media greaterThan='tablet'>
      <DesktopBanner banner={banner} />
    </Media>
    <Media at='mobile'>
      <MobileBanner banner={banner} />
    </Media>
  </MediaContextProvider>
);

ResponsiveBanner.propTypes = {
  banner: PropTypes.array.isRequired,
};

export default ResponsiveBanner;