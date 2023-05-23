import React from "react";
import Select from "react-select";
import "./searchbar.css";

const Searchbar = ({ parks }) => {
  const options = parks
    .filter((park) => park.designation === "National Park")
    .map((park) => ({
      value: park.fullName,
      label: park.fullName,
      link:`/parkInfoPage/${park.parkCode}`
    }));

    const handleChange = (selectedOption) => {
      const { link } = selectedOption;
      window.location.href=link;
    }

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
        onChange={handleChange}
      />
    </div>
  );
};

export default Searchbar;
