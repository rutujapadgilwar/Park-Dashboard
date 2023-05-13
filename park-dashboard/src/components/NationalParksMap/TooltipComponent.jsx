import React, { useState, useEffect } from "react";
import MapChart from "./MapChart";
import ReactTooltip from "react-tooltip";
import { Card } from "react-bootstrap";

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
            <Card className="tooltip p-5" style={{ width: "24rem" }}>
              <Card.Body>
                <Card.Title>Name: {name}</Card.Title>
                <Card.Subtitle>City: {city}</Card.Subtitle>
                <Card.Subtitle>
                  Address: {address} - {city} {postCode}
                </Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Card.Subtitle>Contact Us: {contact}</Card.Subtitle>
              </Card.Body>
            </Card>
          }
        </ReactTooltip>
      )}
    </div>
  );
};

export default TooltipComponent;
