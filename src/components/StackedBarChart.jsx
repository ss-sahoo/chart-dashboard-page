import "chart.js/auto"; // This line is necessary for Chart.js to work properly

import { Bar } from "react-chartjs-2";
import React from "react";
import { parseData } from "../data/parseData";

const getBarChartData = () => {
  const { portData } = parseData();
  const ports = Object.keys(portData);
  const severities = [1, 2, 3];

  const datasets = severities.map((severity) => ({
    label: `Severity ${severity}`,
    data: ports.map((port) => portData[port][severity] || 0),
    backgroundColor:
      severity === 1 ? "#D4B9FF" : severity === 2 ? "#9747FF" : "#FFD7A3",
  }));

  return {
    labels: ports,
    datasets,
  };
};

const options = {
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
      text: "Alerts per Destination Port by Severity",
      color: "white", // Customize the title text color
    },
  },
  scales: {
    x: {
      stacked: true,
      ticks: { color: "white" }, // Customize x-axis labels color
    },
    y: {
      stacked: true,
      ticks: { color: "white" }, // Customize y-axis labels color
    },
  },
};

const StackedBarChart = () => {
  const chartData = getBarChartData();

  return (
    <div className="barchat-container">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default StackedBarChart;
