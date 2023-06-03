import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ActivitiesVsNP from "../../Components/NationalParkActivities/ActivitiesVsNP";
import StateVsNationalParks from "../../Components/BarChartStateVsNationalPark/StateVsNationalParks";
import "./NationalParkChart.css";
import AlertsVsNationalParks from "../../Components/Alerts3dPieChart/AlertsVsNationalParks";
const NationalParkChartPage = () => {
  return (
    <div style={{ marginTop: "6rem" }}>
      <h1 className="text-center" style={{ marginBottom: "5rem" }}>
        Visualizations of all parks
      </h1>
      <Container className="barchart" centered style={{ marginBottom: "4rem" }}>
        <Row>
          <h2 style={{ fontSize: "18px" }} className="text-center">
            Bar Chart: State Vs Park Counts
          </h2>
          <StateVsNationalParks />
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h2 style={{ fontSize: "18px" }} className="text-center">
              Donut Chart: Activities vs National Parks
            </h2>
            <ActivitiesVsNP className="py-5 activities" />
          </Col>
        </Row>
        <Col>
          <h2 style={{ fontSize: "18px" }} className="text-center">
            3D Pie Chart: Alerts Vs National Park Counts
          </h2>
          <AlertsVsNationalParks className="alerts" />
        </Col>
      </Container>
    </div>
  );
};

export default NationalParkChartPage;
