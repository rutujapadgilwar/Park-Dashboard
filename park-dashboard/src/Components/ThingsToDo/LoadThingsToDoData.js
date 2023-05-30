import { useState, useEffect } from "react";
const thingsToDoDataCatch = {};

export const LoadThingsToDodata = () => {
  const [thingsToDoData, sethingsToDoData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (thingsToDoDataCatch.data) {
        sethingsToDoData(thingsToDoDataCatch.data);
      } else {
        const response = await fetch(
          "https://developer.nps.gov/api/v1/thingstodo?api_key=OaR7jmqSa22JAcsym9lVfStp58LmCqH9JdZUPEH7&limit=3080"
        );
        const data = await response.json();
        thingsToDoDataCatch.data = data.data;
        sethingsToDoData(data.data);
      }
    };
    fetchData();
  }, []);
  return thingsToDoData;
};