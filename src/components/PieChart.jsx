import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = [
  "#3366CC", // Blue
  "#DC3912", // Red
  "#FF9900", // Orange
  "#109618", // Green
  "#990099", // Purple
  "#0099C6", // Teal
  "#DD4477", // Pink
  "#66AA00", // Lime
  "#B82E2E", // Dark Red
  "#316395", // Dark Blue
];

const PieChartComponent = ({ data }) => {
  if (!Array.isArray(data)) {
    console.error("PieChartComponent received invalid data:", data);
    return <p>No data available</p>;
  }

  // Ensure all amounts are numbers & filter out invalid items
  const formattedData = data
    .filter((item) => item.type && item.amount) // Ensure type and amount exist
    .map((item) => ({
      ...item,
      amount: Number(item.amount), // Convert amount to number
    }));

  console.log("Formatted Pie Chart Data:", formattedData);

  if (formattedData.length === 0) {
    return <p>No expenses to display</p>; // Show message if there's no data
  }

  return (
    <div className="main" style={{ marginTop: "15px" }}>
      <PieChart width={400} height={400}>
        <Pie
          data={formattedData}
          outerRadius={120}
          fill="#8884d8"
          dataKey="amount"
          nameKey="type"
          label
        >
          {formattedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
