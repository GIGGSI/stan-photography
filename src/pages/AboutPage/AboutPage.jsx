import React from "react";
import styled from "styled-components";
import SecTion from "../../components/Globals/Section";
import { media } from "../../utils/styles";
import { useSelector } from "react-redux";

const AboutPage = () => {
  const { aboutData } = useSelector((state) => state.about);
  console.log(aboutData);
  return (
    <SecTion>
      <HeaderSection>
        <h4>ЗДРАВЕЙТЕ, АЗ СЪМ Станислав</h4>
        <p>
          Имам супер готина работа! Дори мисля, че имам най-готината работа в
          целия свят.
        </p>
      </HeaderSection>
      <Container>
        {aboutData.map((item) => {
          return (
            <ContainerInfo
              key={item.id}
              className={item.className ? "reverse" : null}
            >
              <ImageWrapper>
                {item.imgUrl ? (
                  <img
                    src={item.imgUrl ? item.imgUrl : null}
                    alt="some picture"
                  />
                ) : null}
              </ImageWrapper>
              <TextWrapper>
                <h3>{item.title}</h3>
                <p>{item.paragpraphOne}</p>
                <p>{item.paragprapTwo}</p>
              </TextWrapper>
            </ContainerInfo>
          );
        })}
      </Container>
    </SecTion>
  );
};

const HeaderSection = styled.div`
  width: 85%;
  margin: 0 auto;

  ${media.tablet`
  width: 70%;
  margin-top: 3rem;
  margin-bottom: 3rem;
  `}
`;
const Container = styled.div`
  padding: 6rem calc((100vw - 1300px) / 3);
  display: grid;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;

  /*mobie veiw*/
  ${media.tablet`
margin-top:5rem;
grid-row-gap:3rem;
padding: 0rem 4rem;
.reverse{
    display: flex;
  flex-direction: row-reverse;
}`}
`;

const ContainerInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  .text__info p {
    padding-top: 3rem;
  }
  h3 {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  ${media.tablet`
display: flex;
`}
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
  p {
    margin: 1.5rem;
  }
  ${media.tablet`
width: 50%;

`}
`;
const ImageWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
  ${media.tablet`
width: 50%;
`}
`;

export default AboutPage;
