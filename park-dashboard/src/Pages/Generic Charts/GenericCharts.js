import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DesignationPolarArea from "../../Components/ParkDesignations/DesignationPolarArea";
import CampgroundsChart from "../../Components/Campgrounds/CampgroundsChart";
import "./genericPage.css";
import StateVsParks from "../../Components/BarChartStateVsNationalPark/StateVsParks";
import AlertsVsParks from "../../Components/Alerts3dPieChart/AlertsVsAllPark";
const GenericChart = () => {
  return (
    <div style={{ marginTop: "6rem" }} className="generic-charts">
      <h1 className="text-center my-5 vis-title">
        Visualizations of all parks
      </h1>
      <Container className="barchart" style={{ marginBottom: "5rem" }}>
        <Row>
          <h2 className="text-center my-5 chart-title">
            <span className="header">Bar Chart: State Vs Park Counts</span>
          </h2>

          <StateVsParks />
        </Row>
      </Container>
      <Container className="polar-pie">
        <Row>
          <Col>
            <h2 className="text-center my-5 chart-title">
              <span className="header">
                Polar Area Chart: Park Designations
              </span>
            </h2>
            <DesignationPolarArea className="py-5 designations" />
          </Col>
          <Col>
            <h2 className="text-center my-5 chart-title">
              <span className="header">Pie Chart: Campgrounds</span>
            </h2>

            <CampgroundsChart className="py-5 campgrounds" />
          </Col>
          <Col>
            <h2 className="text-center my-5 chart-title">
              <span className="header">
                3D Pie Chart: Alerts counts per category
              </span>
            </h2>

            <AlertsVsParks />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GenericChart;
