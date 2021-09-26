import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import Slider from "../../components/Carousel/Slider";
import styled from "styled-components";
import { media } from "../../utils/styles";

const CarouselPage = () => {
  const { id } = useParams();
  const { sliderData } = useSelector((state) => state.slider);

  return (
    <CarouselWrapper>
      <Slider data={sliderData} id={id} />
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  ${media.tablet`
  margin:0 auto;
  width: 75vw;
  height: 100vh;
  `}
`;

export default CarouselPage;
