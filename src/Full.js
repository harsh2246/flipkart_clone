import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Full() {
  const [dotStyles, setDotStyles] = useState({
    textAlign: "center",
  });

  const dotInactiveStyles = {
    display: "inline-block",
    margin: "0 5px",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const dotActiveStyles = {
    backgroundColor: "#007bff",
    width: "30px",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    // Applying styles dynamically using useState
    setDotStyles((prevStyles) => ({
      ...prevStyles,
      ".slick-dots li": { ...dotInactiveStyles },
      ".slick-dots li.slick-active": { ...dotActiveStyles },
    }));
  }, []);

  return (
    <div>
      <h2>Single Item</h2>
      <Slider {...settings} style={dotStyles}>
        <div >
          <h3 style={{backgroundColor:'red'}}>1</h3>
        </div>
        <div style={{backgroundColor:'red'}}>
          <h3>2</h3>
        </div>
        <div style={{backgroundColor:'red'}}>
          <h3>3</h3>
        </div>
        <div style={{backgroundColor:'red'}}>
          <h3>4</h3>
        </div>
        <div style={{backgroundColor:'red'}}>
          <h3>5</h3>
        </div>
        <div style={{backgroundColor:'red'}}>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Full;
