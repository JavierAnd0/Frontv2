import React from 'react';
import { createMedia } from '@artsy/fresnel';
import { Container, Image, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../../css/State.css';

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      computer: 1024,
    },
  });

  const DesktopBanner = ({ banner }) => (
    <Container fluid className="bannerContainer">
      <Image src={banner[0]} fluid className="bannerImage" />
      <Header size="huge" color="black" className="centeredText" as="h1" textAlign="center" style={{color: '#000', margin: '20px', 
        padding: '10px 20px', backgroundColor: '#FF6600', borderRadius: '8px', boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.3)', letterSpacing: '1px', 
        fontWeight: 'bold' }}>
      En The Home Depot, nos dedicamos a ofrecer una amplia variedad de productos útiles para el hogar y soluciones prácticas a precios accesibles. 
      Nos comprometemos a brindar calidad y atención cercana a cada cliente, asegurando que encuentren todo lo que necesitan en un solo lugar.
      </Header>
    </Container>
  );
  
  const MobileBanner = ({ banner }) => (
    <Container fluid className="bannerContainer">
      <Image src={banner[0]} fluid className="bannerImage" />
      <Header size="huge" color="black" className="centeredText" as="h1" textAlign="center" style={{color: '#000', margin: '20px', 
        padding: '10px 20px', backgroundColor: '#FF6600', borderRadius: '8px', boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.3)', letterSpacing: '1px', 
        fontWeight: 'bold' }}>
      En The Home Depot, nos dedicamos a ofrecer una amplia variedad de productos útiles para el hogar y soluciones prácticas a precios accesibles. 
      Nos comprometemos a brindar calidad y atención cercana a cada cliente, asegurando que encuentren todo lo que necesitan en un solo lugar.
      </Header>
    </Container>
  );
  
  DesktopBanner.propTypes = {
    banner: PropTypes.array.isRequired,
  };
  
  MobileBanner.propTypes = {
    banner: PropTypes.array.isRequired,
  };
  
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
