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
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-s5nlQK14mDc%2FUtL0TEeJ9RI%2FAAAAAAAAY2U%2FLYDmcixgR1M%2Fs1600%2F187959.jpg&f=1&nofb=1&ipt=00ba5303c46ba81f63d81bdfcdf39e8b871814fefec6dad041206af4ba75e106&ipo=images" 
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Slide>
        <Slide tag="a" index={1}>
          <Image 
            src="https://example.com/image2.png" 
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Slide>
        <Slide tag="a" index={2}>
          <Image 
            src="https://example.com/image3.png" 
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
