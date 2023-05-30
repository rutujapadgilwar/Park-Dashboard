import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DesignationPolarArea from "../../Components/ParkDesignations/DesignationPolarArea";
import CampgroundsChart from "../../Components/Campgrounds/CampgroundsChart";
import "./genericPage.css";
const GenericChart = () => {
	return (
		<div style={{ marginTop: "6rem" }}>
			<h1 className="text-center">
				Visualizations of all parks
			</h1>

			<Container style={{ justifyContent: "space-around" }}>
				<Row>
					<Col>
						<h2 style={{ fontSize: "18px" }} className="text-center">
							Polar Area Chart: Park Designations
						</h2>
						<DesignationPolarArea className="py-5 designations" />
					</Col>
				</Row>
				<Row>
					<Col>
						<h2 style={{ fontSize: "18px" }} className="text-center">
							Pie Chart: Campgrounds
						</h2>
						<CampgroundsChart className="py-5 campgrounds" />
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default GenericChart;
