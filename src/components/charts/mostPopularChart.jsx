// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component

const MostPopularChart = ({ data }) => {
  const chartConfigs = {
    type: "column2d", // The chart type
    width: "100%", // Width of the chart
    height: "350", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Most Popular",
        //Set the x-axis name
        xAxisName: "Repos",
        //Set the y-axis name
        yAxisName: "Stars",
        showvalues: "1",
        //Set the theme for your chart
        theme: "fusion",
      },
      // Chart Data
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default MostPopularChart;
