import React from "react";
import { LoadParkData } from "../../LoadParkData";
import "./StandardParkInfo.css";

const StandardInfo = ({ parks, parkCode }) => {
  const parkData = LoadParkData(parks);
  const stateWiseNationalParks = parkData.filter(
    (park) => park.designation === "National Park" && park.parkCode === parkCode
  );

  let description = "";
  let directionInfo = "";
  let directionsUrl = "";
  let weather = "";
  let standardHours = null;

  stateWiseNationalParks.forEach((park) => {
    directionInfo = park.directionsInfo;
    directionsUrl = park.directionsUrl;
    weather = park.weatherInfo;
    const operatingHours = park.operatingHours;

    operatingHours.forEach((hours) => {
      description = hours.description;

      const hoursArray = Object.entries(hours.standardHours);

      if (!standardHours) {
        standardHours = hoursArray.map(([day, time]) => ({ day, time }));
      }
    });
  });

  return (
    <div className="info-container">
      <div className="info-description">
        <p>
          <span className="p-header">Standard Opening Information: </span>
          {description}
          <hr />
          <span className="p-header">Park Directions Information: </span>{" "}
          {directionInfo}
          <br />
          Checkout the:{" "}
          <a className="direction-url" href={directionsUrl} target="_blank">
            Directions URL
          </a>
        </p>
      </div>
      <div className="more-info">
        <div className="info-hours">
          <div>
            <h2>Our Operating Hours</h2>
            {standardHours &&
              standardHours.map((time) => (
                <div key={time.day}>
                  <span className="day">{time.day}:</span> {time.time}
                </div>
              ))}
          </div>
        </div>
        <div className="weather-info">
          <h2>Weather Specific Information</h2>
          <p>{weather}</p>
        </div>
      </div>
    </div>
  );
};

export default StandardInfo;
