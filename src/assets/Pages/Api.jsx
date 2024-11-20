import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
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
      <div>Donde ubicarnos:</div>
      <LoadScript googleMapsApiKey="AIzaSyBgGV-aj5rXFwYvI_SWwhMBwJFBHOpOr8E
">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
      <Footer />
    </>
  );
};

export default Api;
