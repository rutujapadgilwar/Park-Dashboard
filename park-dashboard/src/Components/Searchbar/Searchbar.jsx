import React from "react";
import Select from "react-select";
import "./searchbar.css";
import { LoadParkData } from "../../LoadParkData";
import { Link } from "react-router-dom";

const Searchbar = (parks) => {
  const parkData = LoadParkData(parks);

  const options = parkData
    .filter((park) => park.designation === "National Park")
    .map((park) => ({
      value: park.fullName,
      label: park.fullName,
      link: `/parkInfoPage/${park.parkCode}`,
    }));

  const handleChange = (selectedOption) => {
    const { link } = selectedOption;
    return <Link to={link} />;
  };

  const customStyles = {
    option: (baseStyle, state) => ({
      ...baseStyle,
      backgroundColor: state.isFocused ? "#008000" : "white",
    }),
  };

  const CustomOption = ({ innerProps, label, data, isSelected, isFocused }) => (
    <div
      {...innerProps}
      style={{
        backgroundColor: isFocused ? "#008000" : isSelected ? "#f1f1f1" : "white",
        padding: "0.5rem"
      }}
    >
      <Link
        to={data.link}
        style={{
          textDecoration: "none",
          color: "inherit",
          padding: "2rem",
          transition: "color 0.3s",
        }}
      >
        {label}
      </Link>
    </div>
  );


  return (
    <div className="searchbar">
      <Select
        className="searchbar-comp"
        options={options}
        placeholder="Search for National Park"
        id="park-name"
        onChange={handleChange}
        components={{ Option: CustomOption }}
        styles={customStyles}
      />
    </div>
  );
};

export default Searchbar;