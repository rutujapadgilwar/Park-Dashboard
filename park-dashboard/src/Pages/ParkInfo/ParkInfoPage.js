import React from "react";
import Alerts from "../ParkInfo/Alerts";
import PhotoCarousel from "../ParkInfo/Carousel";
import { useParams } from "react-router-dom";
import "./ParkInfoPage.css";

const ParkInfoPage = () => {
  let { parkCode } = useParams();
  return (
    <div>
      <PhotoCarousel parkCode={parkCode}></PhotoCarousel>
      <div className="container">
        <div className="left-col">
          <Alerts parkCode={parkCode}></Alerts>
        </div>
        <div className="center-col"></div>
        <div className="right-col"></div>
      </div>
    </div>
  );
};
export default ParkInfoPage;
