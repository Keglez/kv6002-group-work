import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { useEffect, useState } from 'react';
// No need to import CSS file when using Tailwind CSS

import revenueData from "./data/revenueData.json";
import sourceData from "./data/sourceData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const PieChart = ({ chartName, chartData }) => {
  if (!Array.isArray(chartData) || chartData.length === 0) {
    return <div>No data available</div>;
  }
  const [backgroundColor, setBackgroundColor] = useState([]);

  useEffect(() => {
    // Generate random colors for each dataset
    const randomColors = chartData.map(() => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.8)`);
    setBackgroundColor(randomColors);
  }, [chartData]);
  // Now you can use map function safely
  return (
    <div className="bg-foreground-col rounded-md shadow-md max-w-md max-h-72 m-4 p-4">
      <Doughnut
        data={{
          labels: chartData.map((item) => item.label),
          datasets: [
            {
              label: "Was",
              data: chartData.map((item) => item.Amount),
              backgroundColor: backgroundColor,
              borderColor: backgroundColor,
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              text: chartName,
              color: 'white',
            },
          },
        }}
      />
    </div>
  );
};



export default PieChart;
