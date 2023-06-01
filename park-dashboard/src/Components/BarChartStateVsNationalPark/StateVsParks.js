import React from "react";
import BarChartDataProcessing from "./BarChartDataProcessing";
import { LoadParkData } from "../../LoadParkData";
function StateVsParks() {
  const parkData = LoadParkData();

  return <BarChartDataProcessing parkData={parkData} />;
}

export default StateVsParks;