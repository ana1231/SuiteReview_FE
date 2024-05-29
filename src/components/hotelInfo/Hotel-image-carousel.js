import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HotelCarousel = ({ hotels }) => {
  return (
    <div className="hotel_img">
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        {hotels.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={hotels.name} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HotelCarousel;
