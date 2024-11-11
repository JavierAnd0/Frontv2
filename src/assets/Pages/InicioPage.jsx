import React from 'react'
import Carousel from '../Components/Carousel';
import Infoindex from '../Components/Infoindex';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Cards from '../Components/Cards';
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
    <Cards />
    <Footer/>
    </>
  )
}

export default InicioPage