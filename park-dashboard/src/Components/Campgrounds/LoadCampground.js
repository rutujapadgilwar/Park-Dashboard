import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://developer.nps.gov/api/v1";
const API_KEY = "OaR7jmqSa22JAcsym9lVfStp58LmCqH9JdZUPEH7";

const campgroundCacheData = {}

export const LoadCampgroundData = () => {
  const [campgrounds, setCampgrounds] = useState([]);

  useEffect(() => {
    const cacheKey = "campgrounds-data";
    const fetchCampgrounds = async () => {
      const cacheData = localStorage.getItem(cacheKey);
      if (campgroundCacheData.data) {
        setCampgrounds(campgroundCacheData.data);
      } else {
        try {
          const response = await axios.get(`${BASE_URL}/campgrounds`, {
            params: {
              api_key: API_KEY,
              limit: 700,
            },
          });

          setCampgrounds(response.data.data);

          // localStorage.setItem(cacheKey, JSON.stringify(response.data.data));
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchCampgrounds();
  }, []);

  return campgrounds;
};
