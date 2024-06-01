import "chart.js/auto"; // This line is necessary for Chart.js to work properly

import { Doughnut } from "react-chartjs-2";
import React from "react";
import { parseData } from "../data/parseData";

const getCategoryData = () => {
  const { categoryData } = parseData();

  return {
    labels: Object.keys(categoryData),
    datasets: [
      {
        data: Object.values(categoryData),
        backgroundColor: [
          "#9747FF",
          "#FCA997",
          "#B91293",
          "#C3E1FF",
          "#FB4E22",
        ],
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
        color: "white",
      },
    },
    title: {
      display: true,
      text: "Distribution of Alert Categories",
      color: "white",
    },
  },
};

const DoughnutChart = () => {
  const chartData = getCategoryData();

  return (
    <div className="doughnut-container">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default DoughnutChart;
