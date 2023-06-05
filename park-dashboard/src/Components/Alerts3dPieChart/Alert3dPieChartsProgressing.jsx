import { useState } from "react";
import { Chart } from "react-google-charts";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { LoadParkData } from "../../LoadParkData";

const PieChartsProgressing = ({ alertData }) => {
  const parkData = LoadParkData();
  const categoryCounts = alertData.reduce((counts, alert) => {
    const category = alert.category.split(",")[0];
    if (category !== "") {
      counts[category] = (counts[category] || 0) + 1;
    }
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

  const parkNames = alertData
    .filter(
      (alert) =>
        alert.category.split(",")[0] === selectedCategory &&
        alert.parkCode !== ""
    )
    .reduce((uniqueParks, alert) => {
      const park = parkData.find((park) => park.parkCode === alert.parkCode);
      if (park) {
        const parkExists = uniqueParks.some(
          (uniquePark) => uniquePark.parkCode === park.parkCode
        );
        if (!parkExists) {
          uniqueParks.push({
            name: park.name,
            parkCode: park.parkCode,
            imageUrl: park.images.length > 0 ? park.images[0].url : "",
          });
        }
      }
      return uniqueParks;
    }, []);
  const filterParkNames = parkNames.filter((park) => park !== null);
  const AlertCountData = [
    ["AlertsCategory", "Park Count"],
    ["Information", categoryCounts["Information"] || 0],
    ["Danger", categoryCounts["Danger"] || 0],
    ["Park Closure", categoryCounts["Park Closure"] || 0],
    ["Caution", categoryCounts["Caution"] || 0],
  ];
  const colors = ["#017CDC", "#FF0000", "#237D02", "#F1DC05"];
  return (
    <div className="chart">
      <Chart
        chartType="PieChart"
        data={AlertCountData}
        options={{
          is3D: true,
          colors: colors,
          pieSliceText: "percentage",
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
          <Modal.Title>Parks in "{selectedCategory}" category</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          {filterParkNames.length > 0 ? (
            <div className="row">
              {filterParkNames.map((parkName, index) => (
                <div
                  key={index}
                  className={
                    filterParkNames.length > 10 ? "col-lg-6" : "col-lg-12"
                  }
                >
                  <Link
                    to={{ pathname: `/parkInfoPage/${parkName.parkCode}` }}
                    style={{ textDecoration: "none" }}
                    className="hover-link"
                  >
                    <div className="park-item">
                      <img
                        src={parkName.imageUrl}
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
      </Modal>
    </div>
  );
};

export default PieChartsProgressing;
