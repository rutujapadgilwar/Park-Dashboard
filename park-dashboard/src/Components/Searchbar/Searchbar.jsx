import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { Link } from "react-router-dom";
import "./searchbar.css"

const BASE_URL = "https://developer.nps.gov/api/v1";
const API_KEY = "OaR7jmqSa22JAcsym9lVfStp58LmCqH9JdZUPEH7";

const Searchbar = () => {
  const [parkName, setParkName] = useState([]);

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/parks`, {
          params: {
            api_key: API_KEY,
            limit: 500,
          },
        });
        const parks = response.data.data;
        const nationalParks = parks.filter(
          (park) =>
            park.designation === "National Park" &&
            park.fullName !== "Virgin Islands National Park"
        );
        const parkNames = nationalParks.map((park) => ({
          fullName: park.fullName,
          parkCode: park.parkCode,
        }));
        setParkName(parkNames);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNames();
  }, []);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#008000" : "white",
      // color: state.isFocused ? "white" : "black",
      // "&:hover": {
      //   backgroundColor: "brown",
      //   color: "white",
      // },
    }),
  };

  const options = parkName.map((park) => ({
    value: park.fullName,
    label: (
      <Link className="links"
        to={`/parkInfoPage/${park.parkCode}`}
      >
        {park.fullName}
      </Link>
    ),
  }));

  return (
    <div className="searchbar">

      <Select
        className="searchbar-comp"
        options={options}
        placeholder="Search for National Park"
        id="park-name" 
        styles={customStyles}
      />

    </div>
  );
};

export default Searchbar;