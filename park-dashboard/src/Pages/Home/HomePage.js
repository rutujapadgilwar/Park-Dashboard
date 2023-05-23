import React from "react";
import Searchbar from "../../Components/Searchbar/Searchbar";
import StatesData from "../../Components/NationalParksMap/StatesData";
const HomePage = () => {
  return (
    <div>
      <Searchbar className="py-5"/>
      <StatesData />
    </div>
  );
};
export default HomePage;
