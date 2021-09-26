import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Section from "../../components/Globals/Section";
import styled from "styled-components";
import { media } from "../../utils/styles";

const PortfolioPage = () => {
  const { portfolioData } = useSelector((state) => state.data);

  return (
    <Section>
      <FirstRow>
        {portfolioData.firstRow.map((item) => {
          return (
            <div key={item.imgUrl} style={{ overflow: "hidden" }}>
              <Link to={`/carousel/${item.id}`}>
                <img src={item.imgUrl} alt={item.imgUrl} />
              </Link>
            </div>
          );
        })}
      </FirstRow>
      <SecondRow>
        {portfolioData.secondRow.map((item) => {
          return (
            <div key={item.imgUrl} style={{ overflow: "hidden" }}>
              <Link to={`/carousel/${item.id}`}>
                <img src={item.imgUrl} alt={item.imgUrl} />
              </Link>
            </div>
          );
        })}
      </SecondRow>
      <ThirdRow>
        {portfolioData.thirdRow.map((item) => {
          return (
            <div key={item.imgUrl} style={{ overflow: "hidden" }}>
              <Link to={`/carousel/${item.id}`}>
                <img src={item.imgUrl} alt={item.imgUrl} />
              </Link>
            </div>
          );
        })}
      </ThirdRow>
      <FourthRow>
        {portfolioData.fourthRow.map((item) => {
          return (
            <div key={item.imgUrl} style={{ overflow: "hidden" }}>
              <Link to={`/carousel/${item.id}`}>
                <img src={item.imgUrl} alt={item.imgUrl} />
              </Link>
            </div>
          );
        })}
      </FourthRow>
    </Section>
  );
};
const FirstRow = styled.div`
  width: 100%;
  margin: 0 auto;
  gap: 0.5rem;
  div {
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    transition: 0.2s ease-in;
    &:hover {
      opacity: 0.9;
      transform: scale(1.1);
    }
  }
  ${media.tablet`
display:flex;
width:90%;
height:100vh;
`}
`;
const SecondRow = styled.div`
  width: 100%;
  margin: 0 auto;
  gap: 0.5rem;
  div {
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    transition: 0.1s ease-in;
    &:hover {
      opacity: 0.9;
      transform: scale(1.1);
    }
  }
  ${media.tablet`
  width:90%;
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns:2.02fr 1fr;
`}
`;

const ThirdRow = styled.div`
  width: 100%;
  margin: 0 auto;
  gap: 0.5rem;
  div {
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    transition: 0.1s ease-in;
    &:hover {
      opacity: 0.9;
      transform: scale(1.1);
    }
  }
  ${media.tablet`
 display:flex;
 width:90%;
 margin-top: 0.5rem;
 height:100vh;
`}
`;
const FourthRow = styled.div`
  width: 100%;
  margin: 0 auto;
  gap: 0.5rem;
  div {
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    position: cover;
    transition: 0.1s ease-in;
    &:hover {
      opacity: 0.9;
      transform: scale(1.1);
    }
  }
  ${media.tablet`
  width:90%;
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns:1fr 2.02fr;
`}
`;

export default PortfolioPage;
