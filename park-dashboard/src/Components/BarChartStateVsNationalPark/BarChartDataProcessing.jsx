import React, { useEffect, useState, useRef } from "react";
import { Bar, getElementAtEvent } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { redirect } from "react-router-dom";
import "./BarChartStateVsNationalParks.css";
import stateAbbreviation from "../NationalParkActivities/utilities/stateAbbreviation";
import stateNameToAbbreviations from "./stateNameToAbbreviations";
import { Modal, Button } from "react-bootstrap";

function BarChartDataProcessing({ parkData }) {
  const [barChartData, setBarChartData] = useState([]);
  const [parkNamesByStates, setParkNamesByStates] = useState([]);
  const [selectedStateParkNames, setselectedStateParkNames] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (parkData.length === 0) return;

    const nationalParks = parkData.map((park) => ({
      name: park.fullName,
      parkCode: park.parkCode,
      state: park.states.split(",")[0],
      url: park.images[0].url,
    }));

    // Process chart data
    const parkCounts = nationalParks.reduce((counts, park) => {
      let state;
      if (
        park.state === "GU" ||
        park.state === "PR" ||
        park.state === "AS" ||
        park.state === "VI" ||
        park.state === "MP"
      ) {
        state = "Other";
      } else {
        state = park.state;
      }
      counts[state] = (counts[state] || 0) + 1;
      return counts;
    }, {});

    const parkCountsArray = Object.entries(parkCounts)
      .map(([state, count]) => ({
        state,
        count,
      }))
      .sort((a, b) => a.state.localeCompare(b.state));

    setBarChartData(parkCountsArray);

    const parkNamesByStates = nationalParks.reduce((acc, park) => {
      if (!acc[park.state]) {
        acc[park.state] = [];
      }
      acc[park.state].push(park);
      return acc;
    }, {});

    setParkNamesByStates(parkNamesByStates);
  }, [parkData]);

  // Rest of the code...
  // Display Bar Chart
  const chartData = {
    labels: barChartData.map(
      (item) => stateAbbreviation[item.state] || item.state
    ),
    datasets: [
      {
        data: barChartData.map((item) => item.count),
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#cc65fe",
          "#ffce56",
          "#fd6b19",
          "#7c8a8f",
          "#4bc0c0",
          "#ff9f40",
          "#9985d5",
          "#32a852",
          "#f44336",
          "#e91e63",
          "#9c27b0",
          "#673ab7",
          "#3f51b5",
          "#2196f3",
          "#03a9f4",
          "#00bcd4",
          "#009688",
          "#4caf50",
          "#8bc34a",
          "#cddc39",
          "#ffeb3b",
          "#ffc107",
          "#ff9800",
          "#ff5722",
          "#795548",
          "#9e9e9e",
          "#607d8b",
          "#6200ea",
          "#7c4dff",
          "#f8bbd0",
          "#f48fb1",
          "#f06292",
          "#ec407a",
          "#e91e63",
          "#d81b60",
          "#c2185b",
          "#ad1457",
          "#880e4f",
          "#ff80ab",
          "#ff4081",
          "#f50057",
          "#c51162",
          "#9c27b0",
          "#8e24aa",
          "#7b1fa2",
          "#6a1b9a",
          "#4a148c",
          "#ea80fc",
          "#e040fb",
          "#d500f9",
          "#aa00ff",
          "#673ab7",
          "#5e35b1",
          "#512da8",
          "#4527a0",
          "#311b92",
          "#b388ff",
          "#651fff",
        ],
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    indexAxis: "x",
    title: {
      display: true,
      text: "State vs Count of Parks",
      fontSize: 8,
    },
  };

  // Print the column name which user clicked.
  const chartRef = useRef();
  const handleClick = (event) => {
    const index = getElementAtEvent(chartRef.current, event)[0]?.index;

    if (index !== undefined) {
      const stateName = stateNameToAbbreviations[chartData.labels[index]];
      const parkNames = parkNamesByStates[stateName];
      setselectedStateParkNames(parkNames);
      setShowModal(true);
    } else {
      console.log("Not clicked on a bar column");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="chart">
      <div className="chartDisplay1">
        <Bar
          data={chartData}
          options={options}
          onClick={handleClick}
          ref={chartRef}
        />
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Parks</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          {selectedStateParkNames.length > 0 ? (
            <div className="row">
              {selectedStateParkNames.map((item, index) => (
                <div key={index} className="col-lg-6">
                  <Link to={{ pathname: `/parkInfoPage/${item.parkCode}` }}>
                    <div className="park-item">
                      <img
                        src={item.url}
                        alt={item.name}
                        className="park-image"
                      />
                      <span className="park-name">{item.name}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p>No state park names selected.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BarChartDataProcessing;
