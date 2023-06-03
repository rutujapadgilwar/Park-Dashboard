import { useState } from "react";
import { Chart } from "react-google-charts";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { LoadParkData } from "../../LoadParkData";
import { LoadAlertData } from "./LoadAlertData";

const AlertsVsNationalParks = () => {
  const parkData = LoadParkData();
  const alertsData = LoadAlertData();
  const nationalParkAlerts = alertsData.filter((alert) => {
    const park = parkData.find((park) => park.parkCode === alert.parkCode);
    return park && park.designation === "National Park";
  });

  const categoryCounts = nationalParkAlerts.reduce((counts, alert) => {
    const category = alert.category.split(",")[0];
    counts[category] = (counts[category] || 0) + 1;
    return counts;
  }, {});

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const parkNames = nationalParkAlerts
    .filter((alert) => alert.category.split(",")[0] === selectedCategory)
    .map((alert) => {
      const park = parkData.find((park) => park.parkCode === alert.parkCode);
      return park ? park.name : "";
    });

  const AlertCountData = [
    ["AlertsCategory", "Park Count"],
    ...Object.entries(categoryCounts).map(([AlertsCategory, Alertscount]) => [
      AlertsCategory,
      Alertscount,
    ]),
  ];
  const colors = ["#58CB8E", "#36a2eb", "#FF0000", "#FFD433"];
  return (
    <div className="chart">
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

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        className="PopUpModal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Parks in {selectedCategory}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          {parkNames.length > 0 ? (
            <div className="row">
              {parkNames.map((parkName, index) => (
                <div
                  key={index}
                  className={
                    parkNames.length > 10
                      ? "col-lg-6"
                      : "col-lg-12"
                  }
                >
                  <Link
                    to={{ pathname: `/parkInfoPage/${parkName.parkCode}` }}
                    style={{ textDecoration: "none" }}
                    className="hover-link"
                  >
                    <div className="park-item">
                      <img
                        src={parkName.url}
                        alt={parkName.name}
                        className="park-image"
                      />
                      <span className="park-name">{parkName.name}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p>No park names available.</p>
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
};

export default AlertsVsNationalParks;
