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

	stateWiseNationalParks.forEach((park) => {
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
				<p>{description}</p>
			</div>
			<div className="info-hours">
				<h2>Visit us on</h2>
				{standardHours.map((time) => (
					<div key={time.day}>
						<span className="day">{time.day}:</span> {time.time}
					</div>
				))}
			</div>
		</div>
	);
};

export default StandardInfo;
