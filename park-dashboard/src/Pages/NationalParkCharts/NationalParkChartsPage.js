import React from "react";
import ActivitiesVsNP from "../../Components/NationalParkActivities/ActivitiesVsNP";
import StateVsNationalParks from "../../Components/BarChartStateVsNationalPark/StateVsNationalParks";

const NationalParkChartPage = () => {
  return (
    <div style={{ marginTop: "6rem", marginBottom: "6rem" }}>
      <h1 className="text-center">Visualizations of National Parks</h1>
      <div className="grid-container">
        <h2 style={{ fontSize: "18px" }} className="text-center">
          Bar Chart: State vs. National Parks
        </h2>
        <div className="bar-chart">
          <StateVsNationalParks />
        </div>
        <div className="donut-chart">
          <h2 style={{ fontSize: "18px" }} className="text-center">
            Donut Chart: Activities vs. National Parks
          </h2>
          <ActivitiesVsNP className="py-5 activities" />
        </div>
      </div>
    </div>
  );
};

export default NationalParkChartPage;
