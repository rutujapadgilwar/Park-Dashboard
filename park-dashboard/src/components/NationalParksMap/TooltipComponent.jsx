import React, { useState, useEffect } from "react";
import MapChart from "./MapChart";
import ReactTooltip from "react-tooltip";

const TooltipComponent = ({ stateWiseNationalParks }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    ReactTooltip.rebuild();
  }, []);
  return (
    <div>
      <MapChart
        stateWiseNationalParks={stateWiseNationalParks}
        setTooltipName={setName}
        setTooltipAddress={setAddress}
        setTooltipCity={setCity}
        setTooltipPostCode={setPostCode}
        setTooltipDescription={setDescription}
        setTooltipContact={setContact}
      ></MapChart>

      {name && (
        <ReactTooltip
          place="bottom"
          aftershow={() => setTimeout(ReactTooltip.hide, 3000)}
        >
          {
            <div
              className="card"
              style={{
                width: "20rem",
                backgroundColor: "transparent",
                color: "white",
              }}
            >
              <div className="card-body">
                <h1 style={{ fontSize: "16px" }} className="card-title">
                  Name: {name}
                </h1>
                <h3 style={{ fontSize: "15px" }} className="card-title">
                  City: {city}
                </h3>
                <h3 style={{ fontSize: "14px" }} className="card-text">
                  Address: {address} - {city} {postCode}
                </h3>
                <p
                  style={{ fontSize: "14px", textAlign: "left" }}
                  className="card-text my-3"
                >
                  {description}
                </p>
                <h6 className="card-text">Contact Us: {contact}</h6>
              </div>
            </div>
          }
        </ReactTooltip>
      )}
    </div>
  );
};

export default TooltipComponent;
