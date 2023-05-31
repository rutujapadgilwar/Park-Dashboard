import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ActivitiesVsNP from "../../Components/NationalParkActivities/ActivitiesVsNP";

const NationalParkChartPage = () => {
  return (
    <Container style={{ justifyContent: "space-around" }}>
      <Row>
        <Col md={6}>
          <div style={{ width: "45vw", height: "45vh", paddingTop: "70px" }}>
            <h1 className="text-center" style={{ marginBottom: "-60px" }}>
              Activities vs National Parks
            </h1>
            <ActivitiesVsNP />
          </div>
        </Col>
        <Col md={6}>
          <div style={{ width: "45vw", height: "45vh", paddingTop: "70px" }}>
            <h1 className="text-center" style={{ marginBottom: "-60px" }}>
              Activities vs National Parks
            </h1>
            <ActivitiesVsNP />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default NationalParkChartPage;
