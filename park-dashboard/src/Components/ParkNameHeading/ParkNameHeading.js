import React from "react";
import { LoadParkData } from "../../LoadParkData";
import "./ParkNameHeading.css";
function ParkNameHeading(item) {
  const parkData = LoadParkData(item);
  const parkCode = item.parkCode;
  const park = parkData.find((p) => p.parkCode === parkCode);
  const ParkFullName = park ? park.fullName : null;
  const headingAnimation = {
    background: "linear-gradient(to right, #FF0000, #00FF00, #0000FF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <div className="ParkName" style={headingAnimation}>
      {ParkFullName}{" "}
    </div>
  );
}
export default ParkNameHeading;
