import { height } from "@mui/system";
import React from "react";
import CampgroundsChart from "../../Components/Campgrounds/CampgroundsChart";
import { Container, Row, Col } from "react-bootstrap";
const GenericChart = () => {
  return (
    <div style={{ marginTop: "6rem" }}>
      <h1 className="text-center">Visualizations of all parks</h1>

      <Container style={{ justifyContent: "space-around" }}>
        <Row>
          <Col md={6}>
            <h2 className="text-center">Pie Chart: Statewise Campgrounds</h2>
            <CampgroundsChart className="py-5" />
          </Col>
          <Col md={6}>
            <h2 className="text-center">Pie Chart: Statewise Campgrounds</h2>
            <CampgroundsChart className="py-5" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default GenericChart;
