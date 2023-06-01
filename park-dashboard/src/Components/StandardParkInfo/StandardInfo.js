import React from "react";
import { LoadParkData } from "../../LoadParkData";
import "./StandardParkInfo.css";

const StandardInfo = ({ parks, parkCode }) => {
	const parkData = LoadParkData(parks);
	const stateWiseNationalParks = parkData.filter(
		(park) => park.designation === "National Park" && park.parkCode === parkCode
	);

	const standardHours = [];
	let description = "";
	let directionInfo = "";
	let weather = "";

	stateWiseNationalParks.forEach((park) => {
		directionInfo = park.directionsInfo;
		weather = park.weatherInfo;
		const operatingHours = park.operatingHours;

		operatingHours.forEach((hours) => {
			description = hours.description;

			const hoursArray = Object.entries(hours.standardHours);

			hoursArray.forEach(([day, time]) => {
				standardHours.push({ day, time });
			});
		});
	});

	return (
		<div className="info-container">
			<div className="info-description">
				<p>
					{description}
					<hr /> {directionInfo}
				</p>
			</div>
			<div className="more-info">	
			<div className="info-hours">
				<div>
					<h2>Our Operating Hours</h2>
					{standardHours.map((time) => (
						<div key={time.day}>
							<span className="day">{time.day}:</span> {time.time}
						</div>
					))}
				</div>
			</div>
			<div className="weather-info">
				<h2>Weather Information</h2>
					<p>{weather}</p>
			</div>
			</div>
		</div>
	);
};

export default StandardInfo;
