import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ chartName, chartData }) => {
  if (!Array.isArray(chartData) || chartData.length === 0) {
    return <div>No data available</div>;
  }

  const backgroundColors = [
    "rgba(43, 63, 229, 0.8)",
    "rgba(250, 192, 19, 0.8)",
    "rgba(253, 135, 135, 0.8)",
    // Add more colors as needed
  ];

  return (
    <div className="bg-foreground-col rounded-md shadow-md max-w-md max-h-72 m-4 p-4">
      <Bar
        data={{
          labels: chartData.map((data) => data.label),
          datasets: chartData.map((data, index) => ({
            label: data.label,
            data: [data.Amount], // Wrap data in an array to handle multiple datasets
            backgroundColor: backgroundColors[index % backgroundColors.length], // Use different color for each dataset
            borderRadius: 5,
          })),
        }}
        options={{
          plugins: {
            title: {
              display: true,
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