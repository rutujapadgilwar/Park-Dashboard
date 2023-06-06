import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Alerts from "../ParkInfo/Alerts";
import PhotoCarousel from "../ParkInfo/Carousel";
import { useParams } from "react-router-dom";
import "./ParkInfoPage.css";
import ParkActivities from "../../Components/ParkActivities/ParkActivities";
import ParkNameHeading from "../../Components/ParkNameHeading/ParkNameHeading";
import WeatherForecast from "../../Components/WeatherForecast/WeatherForecast";
import ThingsToDo from "../../Components/ThingsToDo/ThingsToDo";
import CampgroundInformation from "../../Components/CampgroundInfo/CampgroundInformation";
import StandardInfo from "../../Components/StandardParkInfo/StandardInfo";
import PassportCenters from "../../Components/StampingCenters/PassportCenters";
import AirQuality from "../../Components/AirQuality/AirQuality";
const ParkInfoPage = () => {
  let { parkCode } = useParams();
  return (
    <div>
      <PhotoCarousel parkCode={parkCode}></PhotoCarousel>
      <ParkNameHeading parkCode={parkCode}></ParkNameHeading>
      <div className="gridContainer">
        <div className="ActivityHeading">
          <h2 className="my-3">
            <span className="header">Alerts</span>
          </h2>
          <div className="alerts">
            <Alerts parkCode={parkCode}></Alerts>
          </div>
        </div>
        <div className="ActivityHeading">
          <h2 className="my-3">
            <span className="header">Weather forecast</span>
          </h2>
          <div className="weather-forecast">
            <WeatherForecast parkCode={parkCode}></WeatherForecast>
          </div>
        </div>

        <div className="ActivityHeading">
          <h2>Air Quality</h2>
          <div className="air-quality">
            <AirQuality parkCode={parkCode}></AirQuality>
          </div>
        </div>
      </div>
      <div className="gridContainer">
        <div className="ActivityHeading">
          <h2 className="my-3">
            <span className="header">To-Do Activities</span>
          </h2>
          <div className="parkActivities">
            <ParkActivities parkCode={parkCode}></ParkActivities>
          </div>
        </div>
        <div className="ActivityHeading">
          <h2 className="my-3">
            <span className="header">Things to explore</span>
          </h2>
          <div className="thingsTodo">
            <ThingsToDo parkCode={parkCode}></ThingsToDo>
          </div>
        </div>
        <div className="ActivityHeading">
          <h2>
            <span className="header">Campgrounds and More</span>
          </h2>
          <div className="campground">
            <CampgroundInformation parkCode={parkCode}></CampgroundInformation>
          </div>
        </div>
      </div>
      <div class="info-container">
        <h2 className="text-center my-3">
          <span className="header">Standard Park Information</span>
        </h2>
        <StandardInfo parkCode={parkCode} />
      </div>
      <div className="passport-container">
        <div className="centered-container">
          <div className="PassportStamping">
            <h2 className="my-3">
              <span className="header">Collect your National Park stamps!</span>
            </h2>
            <PassportCenters parkCode={parkCode} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ParkInfoPage;
