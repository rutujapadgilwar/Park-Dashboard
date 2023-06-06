import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ActivitiesVsNP from "../../Components/NationalParkActivities/ActivitiesVsNP";
import StateVsNationalParks from "../../Components/BarChartStateVsNationalPark/StateVsNationalParks";
import "./NationalParkChart.css";
import AlertsVsNationalParks from "../../Components/Alerts3dPieChart/AlertsVsNationalParks";
const NationalParkChartPage = () => {
  return (
    <div style={{ marginTop: "6rem" }}>
      <h1 className="text-center my-5 vis-title">
        Visualizations of National parks
      </h1>
      <Container className="barchart" centered style={{ marginBottom: "6rem" }}>
        <Row>
        <h2 className="text-center my-5 chart-title">
            <span className="header">Bar Chart: State Vs Park Counts</span>
          </h2>
          <StateVsNationalParks />
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs ={12} md={6}>
            <div style={{ width: "100%", height: "100%", paddingTop: "50px", paddingLeft: "20px" }}>
            <h2 className="text-center my-5 chart-title">
            <span className="header">
              Donut Chart: Activities vs National Parks
            </span>
          </h2>
              <ActivitiesVsNP className="activities"/>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div style={{ width: "100%", height: "100%", paddingTop: "50px", paddingLeft: "70px" }}>
              <h2 className="text-center my-5 chart-title">
                <span className="header">3D Pie Chart: Alerts counts per category</span>
              </h2>
              <AlertsVsNationalParks />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NationalParkChartPage;
