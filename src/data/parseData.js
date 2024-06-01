import jsonData from "./eve.json";

export const parseData = () => {
  const categoryData = {};
  const portData = {};
  const timeSeriesData = {};

  jsonData.chartData?.forEach((entry) => {
    const category = entry?.alert?.category;
    const port = entry?.dest_port;
    const severity = entry?.alert?.severity;
    const timestamp = new Date(entry?.timestamp).toISOString().split("T")[0]; // Use date only, without time

    // Process category data
    if (!categoryData[category]) {
      categoryData[category] = 0;
    }
    categoryData[category]++;

    // Process port data
    if (!portData[port]) {
      portData[port] = {};
    }
    if (!portData[port][severity]) {
      portData[port][severity] = 0;
    }
    portData[port][severity]++;

    // Process time series data
    if (!timeSeriesData[timestamp]) {
      timeSeriesData[timestamp] = {};
    }
    if (!timeSeriesData[timestamp][severity]) {
      timeSeriesData[timestamp][severity] = 0;
    }
    timeSeriesData[timestamp][severity]++;
  });

  return { categoryData, portData, timeSeriesData };
};
