import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { setColor, media } from "../../utils/styles";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { SiFacebook, SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Row>
          <Column>
            <Paragrapht>
              <FaPhoneAlt /> +359899803636
            </Paragrapht>
          </Column>
          <Column>
            <Paragrapht>
              <AiOutlineMail /> falkoneti73@gmail.com
            </Paragrapht>
          </Column>
          <Column>
            <AncorTag
              href="https://www.facebook.com/stanislav.kehajov"
              target="_blank"
            >
              <SiFacebook /> Stanislav Kehajov
            </AncorTag>
          </Column>
          <Column>
            <AncorTag
              href="https://www.instagram.com/stanislav_kehajov/"
              target="_blank"
            >
              <SiInstagram /> @stanislav_kehajov
            </AncorTag>
          </Column>
        </Row>
      </Wrapper>
    </Container>
  );
};

export const Container = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-top: -1.2rem;
  background: radial-gradient(circle, rgb(19, 19, 21) 0%, rgb(18, 17, 15) 100%);
  ${media.tablet`
  margin-top: -0.3rem;
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

export const Links = styled(Link)`
  color: #fff;
  /* margin-bottom: 10px; */
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  color: ${setColor.mainWhite};
  font-weight: bold;
`;
export const Paragrapht = styled.p`
  color: ${setColor.mainWhite};
  padding-bottom: 0.3rem;
`;

const AncorTag = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`;
export default Footer;
