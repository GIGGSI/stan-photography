import React from "react";
import styled from "styled-components";
import { setColor } from "../../utils/styles";
import { useSelector } from "react-redux";
const SliderContent = (props) => {
  const { sliderData } = useSelector((state) => state.slider);
  return (
    <Section>
      {sliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === props.activeIndex ? "slides active" : "inactive"
            }
          >
            <img src={slide.url} alt={slide.title} />
          </div>
        );
      })}
    </Section>
  );
};
const Section = styled.section`
  color: ${setColor.mainWhite};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default SliderContent;
