import React from "react";
import styled from "styled-components";
import Section from "../../components/Globals/Section";
import { BsDot } from "react-icons/bs";
import { setColor, media } from "../../utils/styles";

const data = [
  {
    id: 1,
    title: "ПАКЕТ MIN",
    price: 300,
    subTitleOne: "Получавате 10 обработени кадри във висока резолюция",
    subTitleTwo: "Време за предаване на снимки- 15 работни дни",
  },
  {
    id: 2,
    title: "ПАКЕТ STANDART",
    pice: 400,
    subTitleOne: "Получавате 15 обработени кадри във висока резолюция",
    subTitleTwo: "Време за предаване на снимки – 15 работни дни",
  },
  {
    id: 3,
    title: "ПАКЕТ LUX",
    price: 500,
    subTitleOne: "Получавате 20 обработени кадри във висока резолюция",
    subTitleTwo: "Време за предаване на снимки – 15 работни дни",
  },
];

const PricingPage = () => {
  return (
    <Section>
      {data.map((item) => {
        return (
          <ContentWrapper key={item.id}>
            <div>
              <h3>{item.title}</h3>
            </div>
            <p>
              {" "}
              <BsDot /> {item.subTitleOne}
            </p>

            <p>
              {" "}
              <BsDot /> {item.subTitleTwo}
            </p>
            <p>
              {" "}
              <BsDot /> Цена - {item.price} лв.
            </p>
          </ContentWrapper>
        );
      })}
      <div style={{ width: "65%", margin: "0 auto", marginBottom: "2rem" }}>
        <h6 style={{ letterSpacing: "0.3rem", color: "#666" }}>
          МОЖЕТЕ ДА ПОДАРИТЕ ВСЕКИ ЕДИН ОТ ПАКЕТИТЕ ПОД ФОРМАТА НА ВАУЧЕР. ЗА
          ПОВЕЧЕ ИНФО ТУК:
        </h6>
      </div>
      <div style={{ marginBottom: "3rem", color: "#666" }}>
        <p>
          {" "}
          <BsDot /> В избрания от Вас пакет <strong>НЕ </strong>са включени
          локация за снимки, професионален грим и прическа.
        </p>
        <p>
          {" "}
          <BsDot /> Време за снимки – от 2 до 4 часа
        </p>
        <p>
          {" "}
          <BsDot /> Цените са за проекти с некомерсиални цели.
        </p>
        <p>
          {" "}
          <BsDot /> Цените са за проекти с некомерсиални цели.
        </p>
      </div>
    </Section>
  );
};

const ContentWrapper = styled.div`
  color: ${setColor.gray};
  text-align: center;
  margin-bottom: 2rem;
  padding: 0.5rem 0.5rem;

  h3 {
    text-decoration: underline;
  }
  ${media.tablet`



`}
`;

export default PricingPage;
