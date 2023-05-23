import axios from "axios";
import { useState, useEffect } from "react";
import allStates from "./allStates.json";
import TooltipComponent from "./TooltipComponent";
import Searchbar from "../Searchbar/Searchbar";

const BASE_URL = "https://developer.nps.gov/api/v1";
const API_KEY = "OaR7jmqSa22JAcsym9lVfStp58LmCqH9JdZUPEH7";

export const StatesData = () => {
  const [parks, setParks] = useState([]);
  const [stateWiseNationalParks, setStateWiseNationalParks] = useState([]);

  useEffect(() => {
    const cacheKey = "parks-data";
    const fetchStates = async () => {
      const cacheData = localStorage.getItem(cacheKey);
      if (cacheData) {
        setParks(JSON.parse(cacheData));
      } else {
        try {
          const response = await axios.get(`${BASE_URL}/parks`, {
            params: {
              api_key: API_KEY,
              limit: 500,
            },
          });

          setParks(response.data.data);

          localStorage.setItem(cacheKey, JSON.stringify(response.data.data));
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchStates();
  }, []);

  useEffect(() => {
    const nationalParksData = allStates.map((state) => ({
      id: state.id,
      val: state.val,
      nationalParks: parks
        .filter(
          (park) =>
            park.designation === "National Park" &&
            park.states.includes(state.id) &&
            park.fullName !== "Virgin Islands National Park"
        )
        .map((park) => {
          const physicalAddress = park.addresses.find(
            (address) => address.type === "Physical"
          );
          const phone = park.contacts.phoneNumbers.find(
            (number) => number.type === "Voice"
          );

          return {
            name: park.fullName,
            description: park.description,
            postcode: physicalAddress ? physicalAddress.postalCode : "",
            address: physicalAddress ? physicalAddress.line1 : "",
            city: physicalAddress ? physicalAddress.city : "",
            state: physicalAddress ? physicalAddress.stateCode : "",
            contactPhone: phone ? phone.phoneNumber : "",
            parkcode: park.parkCode,
            coordinates: [
              parseFloat(park.longitude),
              parseFloat(park.latitude),
            ],
          };
        }),
    }));
    setStateWiseNationalParks(nationalParksData);
  }, [parks]);

  return (
    <div>
      <Searchbar class="py-5" parks={parks} />
      <TooltipComponent stateWiseNationalParks={stateWiseNationalParks} />
    </div>
  );
};

export default StatesData;
