import React, { useState, useEffect } from "react";
import Arrows from "./Arrows";
import Dots from "./Dots";
import SliderContent from "./SliderContent";
import "./slider.css";
import styled from "styled-components";

const Slider = ({ data, id }) => {
  let [activeIndex, setActiveIndex] = useState(+id - 1);
  const len = data.length - 1;


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, [activeIndex, id]);

  return (
    <SliderContainer>
      <SliderContent activeIndex={activeIndex} id={id} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
`;

export default Slider;
