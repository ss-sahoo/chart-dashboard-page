import "chart.js/auto"; // This line is necessary for Chart.js to work properly

import { Pie } from "react-chartjs-2";
import React from "react";
import { parseData } from "../data/parseData";

const getPieChartData = () => {
  const { categoryData } = parseData();

  return {
    labels: Object.keys(categoryData),
    datasets: [
      {
        data: Object.values(categoryData),
        backgroundColor: Object.keys(categoryData).map(
          () => `#${Math.floor(Math.random() * 16777215).toString(16)}`
        ),
        hoverBackgroundColor: Object.keys(categoryData).map(
          () => `#${Math.floor(Math.random() * 16777215).toString(16)}`
        ),
      },
    ],
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
      text: "Distribution of Alert Categories",
      color: "white", // Customize the title text color
    },
  },
};

const PieChart = () => {
  const chartData = getPieChartData();

  return (
    <div className="piechart-container">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
