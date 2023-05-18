import { useState, useEffect } from 'react';
export const LoadParkData = () => {
  const [parkData, setParkData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://developer.nps.gov/api/v1/parks?limit=600&api_key=8wxhbGWluNjkTWGhHBCtJETTphT77Zot5Ifxovub"
      );
      const data = await response.json();
      setParkData(data.data);
    };
    fetchData();
  }, []);

  return parkData;
};