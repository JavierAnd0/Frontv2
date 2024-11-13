import React from 'react'
import Carousel from '../Components/Carousel';
import Infoindex from '../Components/Infoindex';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';

// Banner
import bannerHome from '../img/tiendaHOme.jpg';
const bannerView = [bannerHome];



const InicioPage = () => {
  return (
    <>  
    <Navbar />
    <Banner banner={bannerView} />
    <Infoindex />
    <Carousel />
    <Footer/>
    </>
  )
}

export default InicioPage