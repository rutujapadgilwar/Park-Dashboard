import React from "react";
import { LoadCampgroundData } from "./LoadCampground";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

const CampgroundsChart = () => {
  const campgroundsData = LoadCampgroundData();

  const stateWiseCampgrounds = campgroundsData
    .map((camp) => {
      const physicalAddress = camp.addresses.find(
        (address) => address.type === "Physical"
      );

      return {
        address: physicalAddress ? physicalAddress.stateCode : "",
      };
    })
    .filter((camp) => camp.address !== "");

  const counts = stateWiseCampgrounds.reduce((acc, camp) => {
    const stateCode = camp.address;
    acc[stateCode] = (acc[stateCode] || 0) + 1;
    return acc;
  }, {});

  const filteredCounts = Object.entries(counts).filter(
    ([state, count]) => count >= 10
  );

  const stateCodes = filteredCounts.map(([state, count]) => state);
  const campCounts = filteredCounts.map(([state, count]) => count);

  const chartData = {
    labels: stateCodes,
    datasets: [
      {
        label: "Count: ",
        data: campCounts,
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(255, 205, 86, 0.8)",
          "rgba(201, 203, 207, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(200, 100, 50, 0.8)",
          "rgba(150, 200, 80, 0.8)",
          "rgba(100, 150, 200, 0.8)",
          "rgba(50, 80, 150, 0.8)",
          "rgba(220, 120, 180, 0.8)",
          "rgba(80, 220, 120, 0.8)",
          "rgba(180, 80, 220, 0.8)",
          "rgba(120, 180, 80, 0.8)",
          "rgba(230, 160, 60, 0.8)",
          "rgba(60, 230, 160, 0.8)",
          "rgba(50, 150, 50, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(255, 205, 86, 0.8)",
          "rgba(201, 203, 207, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(200, 100, 50, 0.8)",
          "rgba(150, 200, 80, 0.8)",
          "rgba(100, 150, 200, 0.8)",
          "rgba(50, 80, 150, 0.8)",
          "rgba(220, 120, 180, 0.8)",
          "rgba(80, 220, 120, 0.8)",
          "rgba(180, 80, 220, 0.8)",
          "rgba(120, 180, 80, 0.8)",
          "rgba(230, 160, 60, 0.8)",
          "rgba(60, 230, 160, 0.8)",
          "rgba(50, 150, 50, 0.8)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Pie className="py-3" data={chartData} style={{height: "300px"}} />
    </div>
  );
};

export default CampgroundsChart;
