import { useState, useEffect } from "react";

// Cache object to store the park data
const parkDataCache = {};

export const LoadParkData = () => {
	const [parkData, setParkData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			// Check if data exists in cache
			if (parkDataCache.data) {
				setParkData(parkDataCache.data);
			} else {
				const response = await fetch(
					"https://developer.nps.gov/api/v1/parks?limit=600&api_key=8wxhbGWluNjkTWGhHBCtJETTphT77Zot5Ifxovub"
				);
				const data = await response.json();
				// Store data in cache
				parkDataCache.data = data.data;
				setParkData(data.data);
			}
		};
		fetchData();
	}, []);

	console.log(parkData);
	return parkData;
};
