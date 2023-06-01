import Modal from "../../../node_modules/react-bootstrap/Modal";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import getActivityImage from "./utilities/ActivityImages";
import stateAbbreviation from "./utilities/stateAbbreviation";

const useStyles = makeStyles((theme) => ({
  parksMargin: {
    marginLeft: "30px",
  },

  paddingModal: {
    paddingTop: "70px",
    maxHeight: "90vh",
  },
  centered: {
    textAlign: "center",
  },
  imageSize: {
    width: "100%",
    height: "120px",
    objectFit: "cover",
  },
}));

const linkStyle = {
  color: "black",
  ":hover": {
    color: "green",
  },
};

function ParksModal(props) {
  const classes = useStyles();

  const [sortedStatePark, setSortedStatePark] = useState({});
  useEffect(() => {
    const sortedParks = {};

    props.selectedParks.forEach((park) => {
      const state = park.states;

      if (!sortedParks[state]) {
        sortedParks[state] = [];
      }

      sortedParks[state].push(park);
    });
    setSortedStatePark(sortedParks);
  }, [props.selectedParks]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className={classes.paddingModal}
      centered
    >
      <Modal.Header closeButton>
        <h1>{props.activityName}</h1>
      </Modal.Header>
      <div className={classes.partialScreen}>
        <img
          src={getActivityImage(props.activityName)}
          alt={props.activityName}
          className={classes.imageSize}
        />

        {Object.keys(sortedStatePark)
          .sort()
          .map((state) => (
            <div key={stateAbbreviation[state]} className={classes.parksMargin}>
              <h3>{stateAbbreviation[state]}</h3>
              <ul>
                {sortedStatePark[state].map((park) => (
                  <li key={park.fullName}>
                    <Link
                      style={linkStyle}
                      to={`/parkInfoPage/${park.parkCode}`}
                    >
                      {park.fullName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </Modal>
  );
}

export default ParksModal;
