import React from "react";
import { StampingList } from "./StampingList";

const PassportCenters = (centers) => {
  const centersData = StampingList(centers);
  const parkCode = centers.parkCode;
  const center = centersData.find((c) => c.parks[0].parkCode === parkCode);
  return (
    <div className="box">
      <h2>Passport Stamping</h2>
      {center ? (
        <ul>
          <li>{center.label}</li>
        </ul>
      ) : (
        <p>Center not found.</p>
      )}
    </div>
  );
};

export default PassportCenters;
