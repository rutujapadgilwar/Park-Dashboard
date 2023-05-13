import React from "react";
import Alerts from "../ParkInfo/Alerts";
import PhotoCarousel from "../ParkInfo/Carousel";
import "./ParkInfoPage.css";

const ParkInfoPage = () => {
  return (
    <div>
      <PhotoCarousel parkCode="yose"></PhotoCarousel>
      <div className="container">
        <div className="left-col">
          <Alerts parkCode="yose"></Alerts>
        </div>
        <div className="center-col"></div>
        <div className="right-col"></div>
      </div>
    </div>
  );
};
export default ParkInfoPage;
