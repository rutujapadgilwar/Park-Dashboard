import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ActivitiesVsNP from "../../Components/NationalParkActivities/ActivitiesVsNP";
import StateVsNationalParks from "../../Components/BarChartStateVsNationalPark/StateVsNationalParks";
import "./NationalParkChart.css";
const NationalParkChartPage = () => {
  return (
    <div style={{ marginTop: "6rem" }}>
      <h1 className="text-center my-5 vis-title">
        Visualizations of all parks
      </h1>
      <Container className="barchart" centered style={{ marginBottom: "4rem" }}>
        <Row>
          <h2 className="text-center my-5 chart-title">
            <span className="header">Bar Chart: State Vs Park Counts</span>
          </h2>
          <StateVsNationalParks />
        </Row>
      </Container>
      <Container className="donut-chart" centered>
        <Row>
          <h2 className="text-center my-5 chart-title">
            <span className="header">
              Donut Chart: Activities vs National Parks
            </span>
          </h2>
          <ActivitiesVsNP className="py-5 activities" />
        </Row>
      </Container>
    </div>
  );
};

export default NationalParkChartPage;
