import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AirQuality.css";
import ReactSpeedometer from "react-d3-speedometer";

function AirQuality(props) {
  const [aqi, setAqi] = useState(0);
  const [condition, setCondition] = useState("No Data available");
  const [description, setDescription] = useState(
    "Sorry, the air quality couldn't be fetched currently"
  );
  const [color, setColor] = useState("#ff000050");

  const parkCode = props.parkCode;

  const getAQIConditionDescriptionAndColor = (aqi) => {
    if (aqi >= 0 && aqi <= 50) {
      return {
        condition: "Good (0-50)",
        description:
          "Air quality is satisfactory, and there is little to no health risk.",
        color: "#39b54930",
      };
    } else if (aqi > 50 && aqi <= 100) {
      return {
        condition: "Moderate (51-100)",
        description:
          "Air quality is acceptable, but certain pollutants may moderately affect sensitive individuals.",
        color: "#ffff0050",
      };
    } else if (aqi > 100 && aqi <= 150) {
      return {
        condition: "Unhealthy for Sensitive Groups (101-150)",
        description:
          "Some individuals, particularly those with respiratory or heart conditions, may experience health issues due to the elevated pollution levels.",
        color: "#f05a2250",
      };
    } else if (aqi > 150 && aqi <= 200) {
      return {
        condition: "Unhealthy (151-200)",
        description:
          "The general population may experience health effects, and sensitive individuals' conditions may worsen.",
        color: "#ff000050",
      };
    } else if (aqi > 200 && aqi <= 300) {
      return {
        condition: "Very Unhealthy (201-300)",
        description:
          "The air quality is significantly compromised, and there is a higher risk of respiratory problems and other health issues for the general population.",
        color: "#64017950",
      };
    } else if (aqi > 300) {
      return {
        condition: "Hazardous (>300)",
        description:
          "Air quality is severely polluted, posing a significant risk to everyone's health, not just those with pre-existing conditions.",
        color: "#9e010350",
      };
    } else {
      return {
        condition: "No Data available",
        description: "",
        color: "#ff000050",
      };
    }
  };

  const fetchAirQuality = (latitude, longitude) => {
    axios
      .get(
        `https://api.api-ninjas.com/v1/airquality?lat=${latitude}&lon=${longitude}`,
        {
          headers: {
            "X-Api-Key": "dOwjwEBWIUG+i0JD8MFslA==Fqr7PVBUnibAiqU3",
          },
        }
      )
      .then((res) => {
        let aqi = res.data.overall_aqi;
        setAqi(aqi);
        const info = getAQIConditionDescriptionAndColor(aqi);
        setColor(info.color);
        setCondition(info.condition);
        setDescription(info.description);
      });
  };
  useEffect(() => {
    const fetchParkData = async () => {
      try {
        const response = await fetch(
          `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=OaR7jmqSa22JAcsym9lVfStp58LmCqH9JdZUPEH7`
        );
        const data = await response.json();
        const parkData = data.data;

        if (parkData.length > 0) {
          fetchAirQuality(parkData[0].latitude, parkData[0].longitude);
        }
      } catch (error) {
        console.error("Error fetching park data:", error);
      }
    };
    fetchParkData();
  }, []);
  return (
    <div>
      <ReactSpeedometer
        maxValue={300}
        value={aqi}
        height={300}
        width={300}
        valueFormat={"d"}
        style={{ paddingBottom: "-50px" }}
        customSegmentStops={[0, 50, 100, 150, 200, 300]}
        segmentColors={[
          "#39B549",
          "#FFFF00",
          "#F05A22",
          "#FF0000",
          "#640179",
          "#9E0103",
        ]}
        currentValueText={`Air Quality Index: ${aqi}`}
        textColor={"black"}
      />
      <div class="aqi-box" style={{ backgroundColor: color }}>
        <div class="aqi-category">{condition}</div>
        <div class="aqi-description">{description}</div>
      </div>
    </div>
  );
}
export default AirQuality;
