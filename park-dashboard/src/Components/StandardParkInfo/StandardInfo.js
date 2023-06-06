import React from "react";
import { LoadParkData } from "../../LoadParkData";
import "./StandardParkInfo.css";

const StandardInfo = ({ parks, parkCode }) => {
  const parkData = LoadParkData(parks);
  const stateWiseNationalParks = parkData.filter(
    (park) => park.parkCode === parkCode
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
          {description ? (
            <span>{description}</span>
          ) : (
            <span>No standard info available.</span>
          )}
          <hr />
          <span className="p-header">Park Directions Information: </span>
          {directionInfo ? (
            <span>{directionInfo}</span>
          ) : (
            <span>No directions info available.</span>
          )}
          <br />
          {directionsUrl ? (
            <a className="direction-url" href={directionsUrl} target="_blank">
              Directions URL
            </a>
          ) : (
            <span>No directions URL available.</span>
          )}
        </p>
      </div>
      <div className="more-info">
        <div className="info-hours">
          <div>
            <h2 className="info-title">
              <span className="header">Our Operating Hours</span>
            </h2>
            {standardHours && standardHours.length > 0 ? (
              standardHours.map((time) => (
                <div key={time.day}>
                  <span className="day">{time.day}:</span> {time.time}
                </div>
              ))
            ) : (
              <div>No standard hours available.</div>
            )}
          </div>
        </div>
        <div className="weather-info">
          <h2 className="info-title">
            <span className="header">Weather Specific Information</span>
          </h2>
          {weather ? (
            <p>{weather}</p>
          ) : (
            <p>No weather information available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StandardInfo;
