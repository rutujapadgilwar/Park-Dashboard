import React from "react";
import Alerts from "../ParkInfo/Alerts";
import PhotoCarousel from "../ParkInfo/Carousel";
import { useParams } from "react-router-dom";
import "./ParkInfoPage.css";
import ParkActivities from "../../Components/ParkActivities/ParkActivities";
import ParkNameHeading from "../../Components/ParkNameHeading/ParkNameHeading";
const ParkInfoPage = () => {
  let { parkCode } = useParams();
  return (
    <div>
      <PhotoCarousel parkCode={parkCode}></PhotoCarousel>
      <ParkNameHeading parkCode={parkCode}></ParkNameHeading>
      <div className="container">
        <div className="left-col">
          <Alerts parkCode={parkCode}></Alerts>
        </div>
        <div className="center-col"></div>
        <div className="right-col"> </div>
      </div>
      <div className="ActivityHeading">
        <h2>To do Activities</h2>
        <div className="parkActivities">
          <ParkActivities parkCode={parkCode} />
        </div>
      </div>
    </div>
  );
};
export default ParkInfoPage;
