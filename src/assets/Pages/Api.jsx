import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Container, Header, Segment, Button } from 'semantic-ui-react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 2.9273,
  lng: -75.28189
};

const Api = () => {
  return (
    <>
      <Navbar />
      <Header as="h1" textAlign="center"
        style={{ marginTop: '40px', marginBottom: '20px', color: '#FF6600', 
          fontSize: '2.5em', fontWeight: 'bold', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)', 
          letterSpacing: '1px', backgroundColor: 'white', padding: '10px 20px', borderRadius: '5px' 
        }}> Donde ubicarnos
      </Header>
      <LoadScript googleMapsApiKey="AIzaSyBgGV-aj5rXFwYvI_SWwhMBwJFBHOpOr8E">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
      <Container style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
        <Segment style={{ maxWidth: '600px', width: '100%' }}>
          <Header as="h2" textAlign="center" style={{ color: '#FF6600' }}>Contáctanos</Header>
          <Header as="h3">Correo Electrónico</Header>
          <p>thehomedepot@gmail.com</p>
          <Header as="h3">Teléfono</Header>
          <p>+573103456754</p>
          <Header as="h3">Dirección</Header>
          <p>calle 10 #2532 B centro</p>
          <Button color='orange' fluid>Click aquí</Button>
        </Segment>
      </Container>
      <Footer />
    </>
  );
};

export default Api;
