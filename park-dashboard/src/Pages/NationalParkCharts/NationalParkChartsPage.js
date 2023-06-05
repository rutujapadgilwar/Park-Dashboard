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
      <Container className="barchart" centered style={{ marginBottom: "6rem" }}>
        <Row>
          <h2 style={{ fontSize: "24px" }} className="text-center">
            Bar Chart: State Vs Park Counts
          </h2>
          <StateVsNationalParks />
        </Row>
      </Container>
      <Container style={{ justifyContent: "space-around" }}>
        <Row>
          <Col xs={12} md={6}>
            <div style={{ width: "100%", height: "55vh", paddingTop: "70px" }}>
              <h1 className="text-center" style={{ marginBottom: "-60px" }}>
                Activities vs National Parks
              </h1>
              <ActivitiesVsNP />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div style={{ width: "100%", height: "55vh", paddingTop: "70px" }}>
              <h2 className="text-center" style={{ marrginTop:"-70px" }}>
                3D Pie Chart: Alerts counts per category
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
