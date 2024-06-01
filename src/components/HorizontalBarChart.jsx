import "chart.js/auto"; // This line is necessary for Chart.js to work properly

import { Bar } from "react-chartjs-2";
import React from "react";
import { parseData } from "../data/parseData";

const getHorizontalBarChartData = () => {
  const { timeSeriesData } = parseData();
  const timestamps = Object.keys(timeSeriesData).sort();
  const severities = [1, 2, 3];

  const datasets = severities.map((severity) => ({
    label: `Severity ${severity}`,
    data: timestamps.map(
      (timestamp) => timeSeriesData[timestamp][severity] || 0
    ),
    backgroundColor:
      severity === 1 ? "#B91293" : severity === 2 ? "#F3A8E2" : "#FFCE56",
  }));

  return {
    labels: timestamps,
    datasets,
  };
};

const options = {
  indexAxis: "y", // This makes the bar chart horizontal
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "white", // Customize the legend text color
      },
    },
    title: {
      display: true,
      text: "Alerts Over Time with Severity Boundaries",
      color: "white", // Customize the title text color
    },
  },
  scales: {
    x: {
      ticks: { color: "white" }, // Customize x-axis labels color
    },
    y: {
      ticks: { color: "white" }, // Customize y-axis labels color
    },
  },
};

const HorizontalBarChart = () => {
  const chartData = getHorizontalBarChartData();

  return (
    <div className="horizontalbarchat-container">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default HorizontalBarChart;
