import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../contexts/context";
import LanguagesChart from "./charts/languagesChart";
import MostForkedChart from "./charts/mostForkedChart";
import MostPopularChart from "./charts/mostPopularChart";
import StarsChart from "./charts/starsChart";
const Repos = () => {
  const { repos } = useContext(Context);
  const chartData = [
    {
      label: "Venezuela",
      value: "290",
    },
    {
      label: "Saudi",
      value: "260",
    },
    {
      label: "Canada",
      value: "180",
    },
    {
      label: "Iran",
      value: "140",
    },
    {
      label: "Russia",
      value: "115",
    },
    {
      label: "UAE",
      value: "100",
    },
    {
      label: "US",
      value: "30",
    },
    {
      label: "China",
      value: "30",
    },
  ];
  return (
    <section className="section">
      <Wrapper className="section-center">
        <LanguagesChart data={chartData} />
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
