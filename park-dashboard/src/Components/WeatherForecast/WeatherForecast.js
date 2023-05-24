import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import "./WeatherForecast.css";
import { WiCloudy, WiRain, WiSnow } from "react-icons/wi"; // Import weather icons from react-icons library
import {
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiThunderstorm,
  WiFog,
  WiSmoke,
  WiDayHaze,
  WiDust,
  WiSandstorm,
  WiVolcano,
  WiStrongWind,
  WiTornado,
  WiShowers,
} from "react-icons/wi";
import { IoMdRainy } from "react-icons/io";
import { BsFillCloudSlashFill, BsCloudsFill } from "react-icons/bs";
import { GiRaining } from "react-icons/gi";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Chart from "chart.js/auto";

function WeatherForecast(item) {
  const [dailyForecast, setDailyForecast] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const weatherForecastRef = useRef(null);
  const parkCode = item.parkCode;
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const API_KEY = "92dbeb6cb1924c3a12889184257942ea";
        const UNITS = "metric";
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${UNITS}&appid=${API_KEY}`
        );
        const data = await response.json();
        const dataList = data.list;
        const groupedData = groupDataByDay(dataList);
        const dailyData = calculateDailyData(groupedData);
        setDailyForecast(dailyData);
      } catch (error) {
        console.error(error);
      }
    };
    if (latitude && longitude) {
      fetchWeatherData();
    }
  }, [latitude, longitude]);

  useEffect(() => {
    const fetchParkData = async () => {
      try {
        const response = await fetch(
          `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=OaR7jmqSa22JAcsym9lVfStp58LmCqH9JdZUPEH7`
        );
        const data = await response.json();
        const parkData = data.data;

        if (parkData.length > 0) {
          setLatitude(parkData[0].latitude);
          setLongitude(parkData[0].longitude);
        }
      } catch (error) {
        console.error("Error fetching park data:", error);
      }
    };
    fetchParkData();
  }, []);
  useEffect(() => {
    if (weatherForecastRef.current) {
      const containerWidth = weatherForecastRef.current.offsetWidth;
      const totalWidth = dailyForecast.length * 200;
      if (totalWidth > containerWidth) {
        weatherForecastRef.current.classList.add("scrollable");
      } else {
        weatherForecastRef.current.classList.remove("scrollable");
      }
    }
  }, [dailyForecast]);

  const groupDataByDay = (data) => {
    const groupedData = {};
    data.forEach((item) => {
      const date = moment(item.dt_txt).format("YYYY-MM-DD");
      if (!groupedData[date]) {
        groupedData[date] = {
          minTemperature: [],
          maxTemperature: [],
          description: item.weather[0].description,
          icon: item.weather[0].icon,
        };
      }
      groupedData[date].minTemperature.push(item.main.temp_min);
      groupedData[date].maxTemperature.push(item.main.temp_max);
    });
    return groupedData;
  };

  const calculateDailyData = (groupedData) => {
    const dailyData = [];
    for (const date in groupedData) {
      const dailyItem = {
        date: date,
        minTemperature: Math.min(...groupedData[date].minTemperature),
        maxTemperature: Math.max(...groupedData[date].maxTemperature),
        description: groupedData[date].description,
        icon: groupedData[date].icon,
      };
      dailyData.push(dailyItem);
    }
    return dailyData;
  };

  const data = {
    labels: dailyForecast.map((weatherData) => weatherData.date),
    datasets: [
      {
        label: "Minimum Temperature (°C)",
        padding: 10,
        data: dailyForecast.map((weatherData) => weatherData.minTemperature),
        fill: false,
        borderColor: "#54a0ff",
        borderWidth: 2,
        lineTension: 0.3,
      },
      {
        label: "Maximum Temperature (°C)",
        padding: 10,
        data: dailyForecast.map((weatherData) => weatherData.maxTemperature),
        fill: false,
        borderColor: "#ff6961",
        borderWidth: 2,
        lineTension: 0.3,
      },
    ],
  };
  const options = {
    plugins: {
      datalabels: {
        display: true,
        color: "black",
        align: "end",
        anchor: "end",
        formatter: function (value, context) {
          return value + "°C";
        },
        font: { size: "14" },
      },
    },
    title: {
      display: true,
      text: "5-day Weather Forecast",
      fontSize: 16,
    },
    legend: {
      position: "bottom",
      labels: {
        fontSize: 14,
      },
      padding: 20,
    },
    scales: {
      x: {
        padding: "10px",
        type: "category",
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: "black",
          fontSize: 14,
          padding: 10,
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: "black",
          fontSize: 14,
          padding: 15,
        },
      },
    },
  };
  const getWeatherBoxColor = (description) => {
    switch (description) {
      case "clear sky":
        return "clear-sky";
      case "few clouds":
        return "few-clouds";
      case "light-rain":
        return "light-rain";
      case "scattered clouds":
        return "scattered-clouds";
      case "overcast clouds":
        return "overcast-clouds";
      case "broken clouds":
        return "broken-clouds";
      case "shower rain":
        return "rain";
      case "rain":
        return "rain";
      case "moderate rain":
        return "moderate-rain";
      case "thunderstorm":
        return "thunderstorm";
      case "snow":
        return "snow";
      case "mist":
        return "mist";
      case "smoke":
        return "smoke";
      case "haze":
        return "haze";
      case "dust":
        return "dust";
      case "Fog":
        return "fog";
      case "Sand":
        return "sand";
      case "Ash":
        return "ash";
      case "Squall":
        return "squall";
      case "Tornado":
        return "tornado";
      default:
        return "";
    }
  };

  return (
    <div className="weatherLineChart">
      <h2> Weather Forecast </h2>
      <div className="lineChart">
        <Line data={data} plugins={[ChartDataLabels]} options={options} />
      </div>
      <div className="weatherForecast" ref={weatherForecastRef}>
        {dailyForecast.map((forecast, index) => (
          <div
            className={`weatherBox ${getWeatherBoxColor(forecast.description)}`}
            key={index}
            style={{ width: "150px" }}
          >
            <div className="date">
              {moment(forecast.date).format("ddd, MMM D")}
            </div>
            <div className="temperature">
              <span className="temperatureLabel">Min:</span>{" "}
              {forecast.minTemperature}&deg;C
            </div>
            <div className="temperature">
              <span className="temperatureLabel">Max:</span>{" "}
              {forecast.maxTemperature}&deg;C
            </div>
            <div className="weatherDescription">
              {forecast.description.charAt(0).toUpperCase() +
                forecast.description.slice(1)}
            </div>

            <div className="weatherIcon">
              {forecast.description === "clear sky" && <WiDaySunny size={32} />}
              {forecast.description === "few clouds" && (
                <WiDayCloudy size={32} />
              )}
              {forecast.description === "scattered clouds" && (
                <WiCloudy size={32} />
              )}
              {forecast.description === "broken clouds" && (
                <BsFillCloudSlashFill size={32} />
              )}
              {forecast.description === "overcast clouds" && (
                <BsCloudsFill size={32} />
              )}
              {forecast.description === "shower rain" && (
                <WiShowers size={32} />
              )}
              {forecast.description === "rain" && <WiRain size={32} />}
              {forecast.description === "light rain" && <IoMdRainy size={32} />}
              {forecast.description === "moderate rain" && (
                <GiRaining size={32} />
              )}
              {forecast.description === "thunderstorm" && (
                <WiThunderstorm size={32} />
              )}
              {forecast.description === "snow" && <WiSnow size={32} />}
              {forecast.description === "mist" && <WiFog size={32} />}
              {forecast.description === "Smoke" && <WiSmoke size={32} />}
              {forecast.description === "Haze" && <WiDayHaze size={32} />}
              {forecast.description === "Dust" && <WiDust size={32} />}
              {forecast.description === "Fog" && <WiFog size={32} />}
              {forecast.description === "Sand" && <WiSandstorm size={32} />}
              {forecast.description === "Ash" && <WiVolcano size={32} />}
              {forecast.description === "Squall" && <WiStrongWind size={32} />}
              {forecast.description === "Tornado" && <WiTornado size={32} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherForecast;
