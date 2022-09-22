import React, { useState } from "react";
import "./imageslider.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setIndex] = useState(0);
  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    width: "100%",
    backgroundColor: "white",
  };
  console.log(slides[currentIndex].url);

  const goPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setIndex(newIndex);
  };
  const goNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };
  return (
    <div>
      <div className="leftArrow" onClick={goPrevious}>
        ⟨
      </div>
      <div className="rightArrow" onClick={goNext}>
        ⟩
      </div>
      <div className="adContainer">
        <div className="advertise1" style={slideStyles}></div>
        <div className="dotcontainerstyle">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(setIndex)}
              className="dotstyle"
            >
              •
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ImageSlider;
