import React from "react";
import styled from "styled-components";
import Section from "../../components/Globals/Section";
import { media } from "../../utils/styles";

const HomePage = () => {
  return (
    <Section>
      <ImageWrapper>
        <img
          src="https://scontent-sof1-2.xx.fbcdn.net/v/t1.6435-9/34199906_10216401209847817_7507809021902979072_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=irL-yWnpHg0AX9mOEpK&_nc_ht=scontent-sof1-2.xx&oh=0995685aeb82f72b55a2067a9bcf2278&oe=617337B8"
          alt="home image"
        />
      </ImageWrapper>
    </Section>
  );
};

const ImageWrapper = styled.div`
  width: 100%;
  /* height: 65vw; */
  margin: 0 auto;
  img {
    width: 100%;
  }
  ${media.tablet`
  width: 60%;
  height: 100%
`}
`;

export default HomePage;
