import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

const options = {
  title: "Income and Expense vs Time",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0},
  chartArea: { width: "85%", height: "70%" },
};

function Graph() {
  return <Chart chartType="AreaChart" data={data} options={options} className="h-full w-full " />;
}

export default Graph