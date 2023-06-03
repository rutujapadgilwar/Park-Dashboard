import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { LoadParkData } from "../../LoadParkData";
import { Link } from "react-router-dom";

function Alerts3dPieChartsProgressing({ alertData }) {
  const [parkCountsPerAlertArray, setParkCountsPerAlertArray] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const parkData = LoadParkData();
  useEffect(() => {
    const parkAlertsData = alertData.map((alert) => ({
      parkCode: alert.parkCode,
      category: alert.category.split(",")[0],
    }));
    const filterParkCounts = parkAlertsData.filter(
      (obj) => obj.category !== ""
    );
    const parkCounts = filterParkCounts.reduce((AlertsCategory, alert) => {
      AlertsCategory[alert.category] =
        (AlertsCategory[alert.category] || 0) + 1;
      return AlertsCategory;
    }, {});

    const parkCountsPerAlertArray = Object.entries(parkCounts).map(
      ([AlertsCategory, Alertscount]) => ({
        AlertsCategory,
        Alertscount,
      })
    );
    setParkCountsPerAlertArray(parkCountsPerAlertArray);
  }, [alertData]);

  const handleChartClick = (chartWrapper) => {
    const chart = chartWrapper.getChart();
    const selection = chart.getSelection();
    if (selection.length === 0) {
      setSelectedCategory(null);
      return;
    }

    const selectedRow = selection[0].row;
    const category = chartWrapper.getDataTable().getValue(selectedRow, 0);
    setSelectedCategory(category);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCategory(null);
  };

  const parkNames = alertData
    .filter((alert) => alert.category.split(",")[0] === selectedCategory)
    .map((alert) => {
      const park = parkData.find((park) => park.parkCode === alert.parkCode);
      return park
        ? {
            name: park.name,
            // parkCode: park.parkCode,
            // imageUrl: park.images[0].url,
            // parkCode: park.parkCode,
          }
        : null;
    });

  const AlertCountData = [
    ["AlertsCategory", "Alertscount"],
    ...parkCountsPerAlertArray.map(({ AlertsCategory, Alertscount }) => [
      AlertsCategory,
      Alertscount,
    ]),
  ];

  const colors = ["#58CB8E", "#36a2eb", "#FF0000", "#FFD433"];

  return (
    <div className="PieChart">
      <Chart
        chartType="PieChart"
        data={AlertCountData}
        options={{
          is3D: true,
          colors: colors,
        }}
        width="100%"
        height="500px"
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => handleChartClick(chartWrapper),
          },
        ]}
      />

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Parks in {selectedCategory} category</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          {parkNames.length > 0 ? (
            <div className="row">
              {parkNames.map((item, index) => (
                <div
                  key={index}
                  className={
                    parkNames.length > 10
                      ? "col-lg-6"
                      : "col-lg-12"
                  }
                >
                  {/* <Link
                    to={{ pathname: `/parkInfoPage/${item.parkCode}` }}
                    style={{ textDecoration: "none" }}
                    className="hover-link"
                  > */}
                    <div className="park-item">
                      {/* <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="park-image"
                      /> */}
                      <span className="park-name">{item}</span>
                    </div>
                  {/* </Link> */}
                </div>
              ))}
            </div>
          ) : (
            <p>No stateName park names selected.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Alerts3dPieChartsProgressing;
