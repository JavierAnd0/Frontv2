import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DescriptionBannerTeam from '../Components/StateTeam';
import Cards from '../Components/Cards';
import DescriptionBannerCompany from '../Components/StateCompany';
import { Header } from 'semantic-ui-react';

import bannerState from '../img/banner1.jpg';
const bannerView = [bannerState];

import bannerCompany from '../img/Fondopasillo.png';
const bannerView2 = [bannerCompany];

const SobreNosotrosPage = () => {
  return (
    <>
    <Navbar/>
    <Header as="h1" textAlign="center"
      style={{ marginTop: '40px', marginBottom: '20px', color: '#FF6600', 
        fontSize: '2.5em', fontWeight: 'bold', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)', 
        letterSpacing: '1px', backgroundColor: 'white', padding: '10px 20px', borderRadius: '5px' 
      }}> Sobre Nuestro Equipo
    </Header>
    <DescriptionBannerTeam banner={bannerView} />
    <Cards />
    <Header as="h1" textAlign="center"
      style={{ marginTop: '40px', marginBottom: '20px', color: '#FF6600', 
        fontSize: '2.5em', fontWeight: 'bold', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)', 
        letterSpacing: '1px', backgroundColor: 'white', padding: '10px 20px', borderRadius: '5px' 
      }}> Sobre Nuestra Empresa
    </Header>
    <DescriptionBannerCompany banner={bannerView2} />
    <Footer />
    </>
  )
}

export default SobreNosotrosPage