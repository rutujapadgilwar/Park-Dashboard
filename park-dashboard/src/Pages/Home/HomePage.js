import React from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import StatesData from "../../components/NationalParksMap/StatesData";
const HomePage = () => {
  return (
    <div>
      <Searchbar className="py-5" />
      <StatesData />
    </div>
  );
};
export default HomePage;
