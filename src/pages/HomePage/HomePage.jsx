import React from "react";
import styled from "styled-components";
import Section from "../../components/Globals/Section";
import { media } from "../../utils/styles";

const HomePage = () => {
  return (
    <Section>
      <ImageWrapper>
        <img
          src="https://scontent-sof1-2.xx.fbcdn.net/v/t1.6435-9/42819209_10217332566491151_5770427212310249472_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=J7dG6tFppDcAX9HvXnd&tn=UsKch1MahQJ9nke0&_nc_ht=scontent-sof1-2.xx&oh=27150d2d5428c4f62c7eae179042957b&oe=6175321E"
          alt="home image"
        />
      </ImageWrapper>
    </Section>
  );
};

const ImageWrapper = styled.div`
  width: 100%;
  height: 65vw;
  margin: 0 auto;
  img {
    width: 100%;
  }
  ${media.tablet`
  width: 100%;
`}
`;

export default HomePage;
