import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DesignationPolarArea from "../../Components/ParkDesignations/DesignationPolarArea";
import CampgroundsChart from "../../Components/Campgrounds/CampgroundsChart";
import "./genericPage.css";
import StateVsParks from "../../Components/BarChartStateVsNationalPark/StateVsParks";
import AlertsVsParks from "../../Components/Alerts3dPieChart/AlertsVsAllPark";
const GenericChart = () => {
  return (
    <div style={{ marginTop: "6rem" }}>
      <h1 className="text-center" style={{ marginBottom: "5rem" }}>
        Visualizations of all parks
      </h1>
      <Container className="barchart" style={{ marginBottom: "5rem"}}>
        <Row>
          <h2 style={{ fontSize: "18px" }} className="text-center">
            Bar Chart: State Vs Park Counts
          </h2>
          <StateVsParks />
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h2 style={{ fontSize: "18px" }} className="text-center">
              Polar Area Chart: Park Designations
            </h2>
            <DesignationPolarArea className="py-5 designations" />
          </Col>
          <Col>
            <h2 style={{ fontSize: "18px" }} className="text-center">
              Pie Chart: Campgrounds
            </h2>
            <CampgroundsChart className="py-5 campgrounds" />
          </Col>
        </Row>
      </Container>
      <Container className="barchart" style={{ marginBottom: "5rem"}}>
        <Row>
          <h2 style={{ fontSize: "18px" }} className="text-center">
            3D Pie Chart: Alerts Vs Park Counts
          </h2>
          <AlertsVsParks />
        </Row>
      </Container>
    </div>
  );
};

export default GenericChart;
