import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ chartName, chartData }) => {
  if (!Array.isArray(chartData) || chartData.length === 0) {
    return <div>No data available</div>;
  }
  const backgroundColors = [
    "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", 0.8)",
    "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", 0.8)",
    "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", 0.8)",
    "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", 0.8)",
    "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", 0.8)",
    "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", 0.8)",
    "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", 0.8)",
    "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", 0.8)",
    "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", 0.8)",
    "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", 0.8)",
    "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", 0.8)",
    "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", 0.8)",
    "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", 0.8)",
    "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", 0.8)",

    // More Colours
  ];

  return (
    <div className="bg-foreground-col rounded-md shadow-md max-w-md max-h-72 m-4 p-4">
      <Bar
        data={{
          labels: chartData.map((data) => data.label),
          datasets: chartData.map((data, index) => ({
            label: data.label,
            color: 'white',
            data: [data.Amount], // Make array of data
            backgroundColor: backgroundColors[index % backgroundColors.length], // Use different color for each dataset
            borderRadius: 5,
          })),
        }}
        options={{
          plugins: {
            title: {
              display: true,
              color: 'white',
              text: chartName,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;