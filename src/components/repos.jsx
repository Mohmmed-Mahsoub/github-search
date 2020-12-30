import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../contexts/context";
import LanguagesChart from "./charts/languagesChart";
import MostForkedChart from "./charts/mostForkedChart";
import MostPopularChart from "./charts/mostPopularChart";
import StarsChart from "./charts/starsChart";
const Repos = () => {
  //1-fetch repos array from context
  const { repos } = useContext(Context);
  //2-loop in repos arry using reduce function to calclate how many repos used with every language and save the output in a variable
  const languages = repos.reduce((accumulator, currentValue) => {
    //4-destructing language from currentValue(every obj in array)
    const { language } = currentValue;
    //5-if language = null
    if (!language) {
      //just return the accumulator (the total)(that means go to the next currentValue)
      return accumulator;
    }

    /*
    //6-if there is not a key in the accumulator obj = accumulator[language] >> ("css" for EX)
    if (!accumulator[language]) {
      //crete a one and put it's value = 1
      accumulator[language] = 1;
    } else {
      //7-if there is a key in the accumulator obj = accumulator[language] >> go to it and update it's value by adding one(key = value >> accumulator[language] = accumulator[language] + 1)
      accumulator[language] = accumulator[language] + 1;
    }
    */

    //6-if there is not a key in the accumulator obj = accumulator[language] >> ("css" for EX)
    if (!accumulator[language]) {
      //crete a one and put it's value = obj in this shap
      accumulator[language] = { lable: language, value: 1 };
    } else {
      //7-if there is a key in the accumulator obj = accumulator[language] >> go to it and keep the shap of obj just update it's value by adding one
      /*
      //destructing the accumulator[language] >> { lable: language, value: 1 } then update the value (value: accumulator[language].value + 1)
      accumulator[language] = {
        ...accumulator[language],
        value: accumulator[language].value + 1,
      };
      */
      //this waymore clear for me
      accumulator[language] = {
        lable: language,
        value: accumulator[language].value + 1,
      };
    }
    //return the accumulator or the total until now and go to the next currentValue
    return accumulator;
  }, {}); //3-this is the initial value it can be a number or obj or array(depens on what the output you want)...
  /*
  the output >> {CSS: {lable: "CSS", value: 46}, HTML: {lable: "HTML", value: 14}, JavaScript: {lable: "JavaScript", value: 37} }
  but you want in in this shap >> {CSS: {lable: "CSS", value: 46} HTML: {lable: "HTML", value: 14}, {lable: "JavaScript", value: 37}}
  so you want just the value from each obj >> Object.values(languages) (but this puting these in array so you should destricting them >> ...Object.values(languages))
  then take the top five valuse using sort() and slice()
  */
  //replace the hard coded dat with the data you got it from repo
  const chartData = [...Object.values(languages)]
    .sort(function (a, b) {
      return b.value - a.value;
    })
    .slice(0, 5);

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
