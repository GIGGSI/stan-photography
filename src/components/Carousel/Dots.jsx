import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import "./slider.css";

const Dots = (props) => {
  const { sliderData } = useSelector((state) => state.slider);
  return (
    <AllDots>
      {sliderData.map((slide, index) => {
        return (
          <span
            key={index}
            className={`${
              props.activeIndex === index
                ? "dot active-dot span__dots"
                : "dot span__dots"
            }`}
            onClick={(event) => props.onClick((event.target.value = index))}
          ></span>
        );
      })}
    </AllDots>
  );
};
const AllDots = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  top: 90%;
  justify-content: center;
  z-index: 200;
`;

export default Dots;
