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
              We Help Companies and Companions
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible.
              Let us delight your customers and empower your needs... through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be
              bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
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
