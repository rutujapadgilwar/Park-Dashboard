import { useState, useEffect } from "react";
const CampgroundDataCatch = {};
export const LoadCampgroundData = () => {
  const [campgroundData, setCampgroundData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (CampgroundDataCatch.data) {
        setCampgroundData(CampgroundDataCatch.data);
      } else {
        const response = await fetch(
          "https://developer.nps.gov/api/v1/campgrounds?limit=690&api_key=OaR7jmqSa22JAcsym9lVfStp58LmCqH9JdZUPEH7"
        );
        const data = await response.json();
        CampgroundDataCatch.data = data.data;
        setCampgroundData(data.data);
      }
    };
    fetchData();
  }, []);
  console.log(campgroundData);
  return campgroundData;
};
