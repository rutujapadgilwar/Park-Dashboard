import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://developer.nps.gov/api/v1";
const API_KEY = "OaR7jmqSa22JAcsym9lVfStp58LmCqH9JdZUPEH7";

export const StampingList = () => {
  const [passportCenters, setPassportCenters] = useState([]);

  useEffect(() => {
    const cacheKey = "stamping-locations-data";
    const fetchPassportCenters = async () => {
      const cacheData = localStorage.getItem(cacheKey);
      if (cacheData) {
        setPassportCenters(JSON.parse(cacheData));
      } else {
        try {
          const response = await axios.get(
            `${BASE_URL}/passportstamplocations`,
            {
              params: {
                api_key: API_KEY,
                limit: 1000,
              },
            }
          );

          const filteredCenters = response.data.data.filter((center) =>
            center.parks.filter((park) => park.designation === "National Park")
          );

          setPassportCenters(filteredCenters);

          localStorage.setItem(cacheKey, JSON.stringify(filteredCenters));
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchPassportCenters();
  }, []);
  return passportCenters;
};
