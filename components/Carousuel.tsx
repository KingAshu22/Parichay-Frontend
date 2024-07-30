"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Image {
  src: string;
  link: string;
}

const Carousel = ({ images }: { images: Image[] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="mobile-carousel-container">
          <a href={image.link} target="_blank" rel="noopener noreferrer">
            <img
              src={image.src}
              className="mobile-carousel"
              alt={`Slide ${index}`}
            />
          </a>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
