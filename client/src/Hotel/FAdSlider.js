import React, { useState } from "react";
import "./Fistadslinf.css";

const FAdSlider = () => {
  const [currentAd, setCurrentAd] = useState(0);

  const handlePrevClick = () => {
    setCurrentAd(currentAd === 0 ? 2 : currentAd - 1);
  };

  const handleNextClick = () => {
    setCurrentAd(currentAd === 2 ? 0 : currentAd + 1);
  };

  return (
    <div className="ad-slider">
      <div className="ad-slider-content">
        {/* Placeholder ads */}
        <div
          className={`ad-slide ${currentAd === 0 ? "active" : ""}`}
          style={{ background: "#6ab04c" }}
        >
          Ad 1
        </div>
        <div
          className={`ad-slide ${currentAd === 1 ? "active" : ""}`}
          style={{ background: "#f0932b" }}
        >
          Ad 2
        </div>
        <div
          className={`ad-slide ${currentAd === 2 ? "active" : ""}`}
          style={{ background: "#e55039" }}
        >
          Ad 3
        </div>
      </div>
      <button className="ad-slider-prev" onClick={handlePrevClick}>
        Prev
      </button>
      <button className="ad-slider-next" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default FAdSlider;
