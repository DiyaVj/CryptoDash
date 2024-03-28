import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchPopulationData = async () => {
      try {
        const response = await axios.get(
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        );
        setPopulationData(response.data.data);
      } catch (error) {
        console.error("Error fetching population data:", error);
      }
    };

    fetchPopulationData();
  }, []);

  useEffect(() => {
    if (populationData) {
      renderGraph();
    }
  }, [populationData]);

  const renderGraph = () => {
    const canvas = document.getElementById("population-chart");
    if (!canvas) return;

    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy existing chart instance
    }

    const ctx = canvas.getContext("2d");

    const groupedData = populationData.reduce((acc, curr) => {
      if (!acc[curr.Nation]) {
        acc[curr.Nation] = {
          label: curr.Nation,
          data: [],
        };
      }
      acc[curr.Nation].data.push(curr.Population);
      return acc;
    }, {});

    const nationLabels = Object.keys(groupedData);
    const datasets = Object.values(groupedData).map((nationData, index) => ({
      label: nationData.label,
      data: nationData.data,
      backgroundColor: getRandomColor(index),
      borderWidth: 1,
    }));

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: nationLabels,
        datasets: datasets,
      },
      options: {
        scales: {
          y: {
            title: {
              display: true,
              text: "Population",
              font: {
                weight: "bold",
                color: "white",
              },
            },
            beginAtZero: true,
            ticks: {
              color: "white",
            },
          },
          x: {
            title: {
              display: true,
              text: "Nation",
              font: {
                weight: "bold",
                color: "white",
              },
            },
            ticks: {
              color: "white",
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "white",
            },
          },
        },
      },
    });
  };

  const getRandomColor = (index) => {
    const colors = [
      "#ff6384",
      "#36a2eb",
      "#ffcd56",
      "#4bc0c0",
      "#9966ff",
      "#ff9f40",
      "#1abc9c",
      "#f39c12",
      "#8e44ad",
      "#3498db",
      "#e74c3c",
      "#2ecc71",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="population-graph p-10 m-4 bg-gray-900 rounded-lg flex flex-col justify-center items-center" style={{ width:"450px", height: "450px" }}>
     <h2 className="text-white text-lg font-bold mb-4">Population Data by Nation</h2>
      <canvas id="population-chart" width="400" height="400"></canvas>
    </div>
  );
};

export default PopulationGraph;
