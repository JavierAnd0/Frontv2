import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';
import tiendapasillo from '../img/Fondopasillo.png';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

// Usar parámetros predeterminados en lugar de defaultProps
const DesktopContainer = ({ children = null }) => (
  <Media greaterThan="tablet">
    <div>{children}</div>
  </Media>
);

const MobileContainer = ({ children = null }) => (
  <Media at="mobile">
    <div>{children}</div>
  </Media>
);

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children = null }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '2em 0em' }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              ¿Nuestros productos?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Nuestros productos son seleccionados de la mayor calidad del mercado, siendo así importaciones directas con los proveedores con la mejor calidad.
            </p>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Precios:
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Al tener conexión directa con los proveedores, tenemos los mejores precios del mercado, siendo nuestro fuerte y además de mostrar la mejor variedad de productos.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image bordered rounded size="large" src={tiendapasillo} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center"></Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;
