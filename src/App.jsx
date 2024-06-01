import "./global.css";

import React, { useEffect, useState } from "react";

import DoughnutChart from "./components/DoughnutChart";
import HorizontalBarChart from "./components/HorizontalBarChart";
import LineChartBoundaries from "./components/HorizontalBarChart";
import Logo from "./Logo.svg";
import PieChart from "./components/PieChart";
import StackedBarChart from "./components/StackedBarChart";
import { parseData } from "./data/parseData";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const parsedData = parseData();
    setData(parsedData);
  }, []);

  return (
    <div className="container">
      <div className="header">
        <img src={Logo} alt="company-logo" />
        <h1>
          Company <br />
          Name
        </h1>
      </div>
      <div className="chart-container">
        <DoughnutChart />
        <PieChart />
        <StackedBarChart />

        <HorizontalBarChart />
      </div>
    </div>
  );
};

export default App;
