import React from "react";
import { LoadAlertData } from "./LoadAlertData";
import PieChartsProgressing from "./Alert3dPieChartsProgressing";

function AlertsVsParks() {
  const alertData = LoadAlertData();
  return <PieChartsProgressing alertData={alertData} />;
}

export default AlertsVsParks;
