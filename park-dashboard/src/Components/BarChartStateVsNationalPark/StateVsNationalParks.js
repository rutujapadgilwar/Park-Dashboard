import React from "react";
import BarChartDataProcessing from "./BarChartDataProcessing";
import { LoadParkData } from "../../LoadParkData";
function StateVsNationalParks() {
  const parkData = LoadParkData();
  const nationalParkFilter = parkData.filter(
    (park) => park.designation === "National Park"
  );
  return (
    <div>
      <BarChartDataProcessing parkData={nationalParkFilter} />
    </div>
  );
}

export default StateVsNationalParks;
