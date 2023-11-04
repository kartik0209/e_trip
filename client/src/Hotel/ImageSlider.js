import React, { useState } from 'react';
import './Loctaionart.css'

const ImageSlider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className="image-slider">
      <button onClick={handlePrev} className="slider-button">Prev</button>
      <img src={images[currentImage]} alt="slider-image" />
      <button onClick={handleNext} className="slider-button">Next</button>
    </div>
  );
};

export default ImageSlider;
