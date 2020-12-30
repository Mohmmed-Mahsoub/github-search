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
  const languagesAndStart = repos.reduce((accumulator, currentValue) => {
    //4-destructing language from currentValue(every obj in array) //destructing stargazers_count to calculate start per languge
    const { language, stargazers_count } = currentValue;
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
      //crete a one and put it's value = obj in this shap (adding start to calulate start per lang)
      accumulator[language] = {
        label: language,
        value: 1,
        stars: stargazers_count,
      };
    } else {
      //7-if there is a key in the accumulator obj = accumulator[language] >> go to it and keep the shap of obj just update it's value by adding one
      /*
      //destructing the accumulator[language] >> { label: language, value: 1 } then update the value (value: accumulator[language].value + 1)
      accumulator[language] = {
        ...accumulator[language],
        value: accumulator[language].value + 1,
      };
      */
      //this way more clear for me
      accumulator[language] = {
        label: language,
        value: accumulator[language].value + 1,
        stars: accumulator[language].stars + stargazers_count,
      };
    }
    //return the accumulator or the total until now and go to the next currentValue
    return accumulator;
  }, {}); //3-this is the initial value it can be a number or obj or array(depens on what the output you want)...
  /*
  the output >> {CSS: {label: "CSS", value: 46}, HTML: {label: "HTML", value: 14}, JavaScript: {label: "JavaScript", value: 37} }
  but you want in in this shap >> {CSS: {label: "CSS", value: 46} HTML: {label: "HTML", value: 14}, {label: "JavaScript", value: 37}}
  so you want just the value from each obj >> Object.values(languages) (but this puting these in array so you should destricting them >> ...Object.values(languages))
  then take the top five valuse using sort() and slice()
  */
  console.log(languagesAndStart);

  //language data (replace the hard coded data with the data you got it from repo)
  const chartLanguagesData = [...Object.values(languagesAndStart)]
    .sort(function (a, b) {
      return b.value - a.value;
    })
    .slice(0, 5);

  //stars per language data
  const starsPerLanguage = [...Object.values(languagesAndStart)]
    .sort(function (a, b) {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);
  console.log(starsPerLanguage, chartLanguagesData);

  const chartData = [
    {
      label: "Venezuela",
      stars: "20",
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
  ];
  return (
    <section className="section">
      <Wrapper className="section-center">
        <LanguagesChart data={chartLanguagesData} />
        <MostPopularChart />
        <StarsChart data={starsPerLanguage} />
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
