import { LoadParkData } from "../../LoadParkData";
import { LoadAlertData } from "./LoadAlertData";
import PieChartsProgressing from "./Alert3dPieChartsProgressing";

const AlertsVsNationalParks = () => {
  const parkData = LoadParkData();
  const alertsData = LoadAlertData();
  
  console.log('parkData:', parkData);
  console.log('alertsData:', alertsData);
  
  const nationalParkAlerts = alertsData.filter((alert) => {
    const park = parkData.find((park) => park.parkCode === alert.parkCode);
    return park && park.designation === "National Park";
  });
  
  console.log('nationalParkAlerts:', nationalParkAlerts);
  
  return <PieChartsProgressing alertData={nationalParkAlerts} />;
  
};

export default AlertsVsNationalParks;
