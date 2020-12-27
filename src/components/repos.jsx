import React from "react";
import styled from "styled-components";
import LanguagesChart from "./charts/languagesChart";
import MostForkedChart from "./charts/mostForkedChart";
import MostPopularChart from "./charts/mostPopularChart";
import StarsChart from "./charts/starsChart";
const Repos = () => {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <LanguagesChart />
        <MostPopularChart />
        <StarsChart />
        <MostForkedChart />
      </Wrapper>
    </section>
  );
};
const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }import LanguagesChart from './charts/languagesChart';

`;
export default Repos;
