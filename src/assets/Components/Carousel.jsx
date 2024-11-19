import React from "react";
import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import { useMediaQuery } from 'react-responsive';
import { Divider } from "semantic-ui-react";
import CustomDotGroup from "./CustomDotGroup";
import "pure-react-carousel/dist/react-carousel.es.css";

const ImageCarousel = ({
  images = [
    "https://i.ytimg.com/vi/_fhANuogFZQ/maxresdefault.jpg",
    "https://www.encuentraloenputumayo.com/wp-content/uploads/2021/08/papeleria-cacharreria-pinateria-detalles-panalera-acuario-orito-putumayo-5.jpg",
    "https://i.ytimg.com/vi/oHPu9KdKW9Q/maxresdefault.jpg",
  ],
  autoplay = true,
  interval = 2000,
  isInfinite = true,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <CarouselProvider
      naturalSlideWidth={1600}
      naturalSlideHeight={isMobile ? 700 : 400}
      totalSlides={images.length}
      isPlaying={autoplay}
      interval={interval}
      infinite={isInfinite}
      touchEnabled={true}
      dragEnabled={true}
      style={{
        maxWidth: "100%",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <Slider>
        {images.map((image, index) => (
          <Slide tag="a" index={index} key={index}>
            <Image 
              src={image} 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Slide>
        ))}
      </Slider>

      <Divider />
      <CustomDotGroup slides={images.length} />
    </CarouselProvider>
  );
};

export default ImageCarousel;
