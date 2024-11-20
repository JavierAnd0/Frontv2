import React from "react";
import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import { useMediaQuery } from 'react-responsive';
import { Divider } from "semantic-ui-react";
import CustomDotGroup from "./CustomDotGroup";
import "pure-react-carousel/dist/react-carousel.es.css";
import Producto1 from '../img/Producto1.jpeg';
import Producto2 from '../img/Producto2.jpeg';
import Producto3 from '../img/Sellante.jpeg';


const ImageCarousel = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <CarouselProvider
      naturalSlideWidth={1500}
      naturalSlideHeight={isMobile ? 600 : 500} // Cambia la altura en función de si es móvil
      totalSlides={3}
      isPlaying={true}
      interval={2000}
      infinite={true}
      touchEnabled={true}
      dragEnabled={true}
      style={{
        maxWidth: "100%",    
        margin: "0 auto",    
        overflow: "hidden",
      }}
    >
      <Slider>
        <Slide tag="a" index={0}>
          <Image 
            src={Producto1} 
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Slide>
        <Slide tag="a" index={1}>
          <Image 
            src={Producto2}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Slide>
        <Slide tag="a" index={2}>
          <Image 
            src={Producto3} 
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Slide>
      </Slider>

      <Divider />
      <CustomDotGroup slides={3} />
    </CarouselProvider>
  );
};

export default ImageCarousel;
