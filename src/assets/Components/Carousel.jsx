import React from "react";
import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import { useMediaQuery } from 'react-responsive';
import { Divider } from "semantic-ui-react";
import CustomDotGroup from "./CustomDotGroup";
import "pure-react-carousel/dist/react-carousel.es.css";

const ImageCarousel = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <CarouselProvider
      naturalSlideWidth={1600}
      naturalSlideHeight={isMobile ? 700 : 400} // Cambia la altura en función de si es móvil
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
            src="https://i.ytimg.com/vi/_fhANuogFZQ/maxresdefault.jpg" 
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Slide>
        <Slide tag="a" index={1}>
          <Image 
            src="https://www.encuentraloenputumayo.com/wp-content/uploads/2021/08/papeleria-cacharreria-pinateria-detalles-panalera-acuario-orito-putumayo-5.jpg" 
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Slide>
        <Slide tag="a" index={2}>
          <Image 
            src="https://i.ytimg.com/vi/oHPu9KdKW9Q/maxresdefault.jpg" 
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
