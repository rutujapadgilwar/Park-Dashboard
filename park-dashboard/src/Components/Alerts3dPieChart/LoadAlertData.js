import { useState, useEffect } from "react";

const parkAlertsCache = {};
export const LoadAlertData = () => {
  const [alertData, setAlertData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (parkAlertsCache.data) {
        setAlertData(parkAlertsCache.data);
      } else {
        const response = await fetch(
          "https://developer.nps.gov/api/v1/alerts?limit=800&api_key=8wxhbGWluNjkTWGhHBCtJETTphT77Zot5Ifxovub"
        );
        const data = await response.json();
        parkAlertsCache.data = data.data;
        setAlertData(data.data);
      }
    };
    fetchData();
  }, []);

  return alertData;
};
