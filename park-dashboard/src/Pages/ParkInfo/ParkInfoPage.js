import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Alerts from "../ParkInfo/Alerts";
import PhotoCarousel from "../ParkInfo/Carousel";
import { useParams } from "react-router-dom";
import "./ParkInfoPage.css";
import ParkActivities from "../../Components/ParkActivities/ParkActivities";
import ParkNameHeading from "../../Components/ParkNameHeading/ParkNameHeading";
import WeatherForecast from "../../Components/WeatherForecast/WeatherForecast";
import ThingsToDo from "../../Components/ThingsToDo/ThingsToDo";
import CampgroundInformation from "../../Components/CampgroundInfo/CampgroundInformation";
import PassportCenters from "../../Components/StampingCenters/PassportCenters";
const ParkInfoPage = () => {
	let { parkCode } = useParams();
	return (
		<div>
			<PhotoCarousel parkCode={parkCode}></PhotoCarousel>
			<ParkNameHeading parkCode={parkCode}></ParkNameHeading>
			<div className="container">
				<div className="left-col">
					<Alerts parkCode={parkCode}></Alerts>
				</div>
				<div className="right-col">
					<WeatherForecast parkCode={parkCode}></WeatherForecast>
				</div>
			</div>
			<div className="gridContainer">
				<div className="ActivityHeading">
					<h2>To-Do Activities</h2>
					<div className="parkActivities">
						<ParkActivities parkCode={parkCode}></ParkActivities>
					</div>
				</div>
				<div className="ActivityHeading">
					<h2>Things to explore</h2>
					<div className="thingsTodo">
						<ThingsToDo parkCode={parkCode}></ThingsToDo>
					</div>
				</div>
				<div className="ActivityHeading">
					<h2>Campgrounds and More</h2>
					<div className="campground">
						<CampgroundInformation parkCode={parkCode}></CampgroundInformation>
					</div>
				</div>
			</div>
			<div className="passport-container">
				<div className="centered-container">
					<div className="PassportStamping">
						<h2>Collect your National Park stamps!</h2>
						<PassportCenters parkCode={parkCode} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default ParkInfoPage;
