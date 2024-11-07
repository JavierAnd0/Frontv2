import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import React from 'react';
import "../img/cacharreria2.jpg";
import {
  Button,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

// Definición de DesktopContainer
const DesktopContainer = ({ children }) => (
  <Media greaterThan='tablet'>
    <div>{children}</div>
  </Media>
);

// Definición de MobileContainer
const MobileContainer = ({ children }) => (
  <Media at='mobile'>
    <div>{children}</div>
  </Media>
);

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

MobileContainer.propTypes = {
  children: PropTypes.node,
};

// Definición de ResponsiveContainer
const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

// Componente principal HomepageLayout
const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '2em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              ¿Nuestros productos?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Nuestros productos son seleccionados de la mayor calidad del mercado, siendo asi importaciones directas con los proveedores con la mejor calidad.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Precios:
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Al tener conexion directa con los proveedores tenemos los mejores precios del mercado, siendo nuestro fuerte y ademas de mostrar la mejor variedad de productos
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='../img/cacharreria2.jpg' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;
