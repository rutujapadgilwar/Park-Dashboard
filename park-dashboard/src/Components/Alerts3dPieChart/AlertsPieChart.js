import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { LoadAlertData } from "./LoadAlertData";

function AlertsPieChart() {
  const alertData = LoadAlertData();
  const [parkCountsPerAlertArray, setParkCountsPerAlertArray] = useState([]);

  useEffect(() => {
    const parkAlertsData = alertData.map((alert) => ({
      parkCode: alert.parkCode,
      category: alert.category.split(",")[0],
    }));
    const filterParkCounts = parkAlertsData.filter(obj => obj.category !== ""); 
    const parkCounts = filterParkCounts.reduce((AlertsCategory, alert) => {
        AlertsCategory[alert.category] = (AlertsCategory[alert.category] || 0) + 1;
      return AlertsCategory;
    }, {});
    
    const parkCountsPerAlertArray = Object.entries(parkCounts).map(
      ([AlertsCategory, Alertscount]) => ({
        AlertsCategory,
        Alertscount,
      })
    );
    setParkCountsPerAlertArray(parkCountsPerAlertArray);
  }, [alertData]);

  const AlertCountData = [
    ["AlertsCategory", "Alertscount"],
    ...parkCountsPerAlertArray.map(({ AlertsCategory, Alertscount }) => [AlertsCategory, Alertscount]),
  ];
  const colors = [
    "#58CB8E",
    "#36a2eb",
    "#FF0000",
    "#FFD433",
   
  ];

  return (
    <div className="PieChart">
      <Chart
        chartType="PieChart"
        data={AlertCountData}
        options={{
          is3D: true,
          colors: colors,
        }}
        width="100%"
        height="500px"
      />
    </div>
  );
}

export default AlertsPieChart;
