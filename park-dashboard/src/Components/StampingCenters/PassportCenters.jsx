import React from "react";
import { StampingList } from "./StampingList";
import "./stamping.css";
import stampImage from "./stampLogo.png";

const PassportCenters = (centers) => {
  const centersData = StampingList(centers);
  const parkCode = centers.parkCode;
  let stampingCenters = [];

  for (let i = 0; i < centersData.length; i++) {
    const center = centersData[i];
    const parks = center.parks;

    for (let j = 0; j < parks.length; j++) {
      const park = parks[j];

      if (park.parkCode === parkCode) {
        stampingCenters.push(center);
        break;
      }
    }
  }

  return (
    <div className="passport-locations">
      <div className="stamping-image">
      <img className="stamp" src={stampImage} alt="Stamping-Logo" />
      </div>
      <div className="location-list">
      {stampingCenters.length > 0 ? (
        <ul>
          {stampingCenters.map((center) => (
            <div className="center-name"><li key={center.label}>{center.label}</li></div>
          ))}
        </ul>
      ) : (
        <p>No stamping center found.</p>
      )}
      </div>
    </div>
  );
};

export default PassportCenters;
