import React from "react";
import { LoadAlertData } from "./LoadAlertData";
import Alerts3dPieChartsProgressing from "./Alert3dPieChartsProgressing";
function AlertsVsParks() {
  const alertData = LoadAlertData();

  return <Alerts3dPieChartsProgressing alertData={alertData} />;
}

export default AlertsVsParks;
