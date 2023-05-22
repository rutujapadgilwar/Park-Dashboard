import React from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "./searchbar.css";

const Searchbar = ({ parks }) => {
  const options = parks
    .filter((park) => park.designation === "National Park")
    .map((park) => ({
      value: park.fullName,
      label: (
        <Link className="links" to={`/parkInfoPage/${park.parkCode}`}>
          {park.fullName}
        </Link>
      ),
    }));

  const customStyles = {
    option: (baseStyle, state) => ({
      ...baseStyle,
      backgroundColor: state.isFocused ? "#008000" : "white",
    }),
  };

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
