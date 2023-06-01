import React from "react";
import Alerts from "../ParkInfo/Alerts";
import PhotoCarousel from "../ParkInfo/Carousel";
import { useParams } from "react-router-dom";
import "./ParkInfoPage.css";
import ParkActivities from "../../Components/ParkActivities/ParkActivities";
import ParkNameHeading from "../../Components/ParkNameHeading/ParkNameHeading";
import WeatherForecast from "../../Components/WeatherForecast/WeatherForecast";
import ThingsToDo from "../../Components/ThingsToDo/ThingsToDo";
import CampgroundInformation from "../../Components/CampgroundInfo/CampgroundInformation";
const ParkInfoPage = () => {
	let { parkCode } = useParams();
	return (
		<div>
			<PhotoCarousel parkCode={parkCode}></PhotoCarousel>
			<ParkNameHeading parkCode={parkCode}></ParkNameHeading>
			<div className="container">
				<div className="left-col">
					<h2>
						<span className = "header">Alerts</span>
					</h2>
					<Alerts parkCode={parkCode}></Alerts>
				</div>
				<div className="right-col">
					<h2><span className = "header">Weather Forecast</span></h2>
					<WeatherForecast parkCode={parkCode}></WeatherForecast>
				</div>
			</div>
			<div className="gridContainer">
				<div className="ActivityHeading">
					<h2>
					<span className = "header">To-Do Activities</span>
					</h2>
					<div className="parkActivities">
						<ParkActivities parkCode={parkCode}></ParkActivities>
					</div>
				</div>
				<div className="ActivityHeading">
					<h2>
						<span className = "header">Things to explore</span>
					</h2>
					<div className="thingsTodo">
						<ThingsToDo parkCode={parkCode}></ThingsToDo>
					</div>
				</div>
				<div className="ActivityHeading">
					<h2>
						<span className = "header">Campgrounds and More</span>
					</h2>
					<div className="campground">
						<CampgroundInformation parkCode={parkCode}></CampgroundInformation>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ParkInfoPage;
