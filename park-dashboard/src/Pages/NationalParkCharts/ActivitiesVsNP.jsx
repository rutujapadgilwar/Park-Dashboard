import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const useStyles = makeStyles((theme) => ({
  padding: {
    paddingTop: "70px",
  },
  chartContainer: {
    position: "relative",
    height: "100vh",
    width: "100vh",
  },
}));

function ActivitiesVsNP() {
  const [activitiesObject, setActivitiesObject] = useState({});
  const classes = useStyles();
  const fetchActivities = async () => {
    axios
      .get(
        `https://developer.nps.gov/api/v1/activities/parks?API_Key=OaR7jmqSa22JAcsym9lVfStp58LmCqH9JdZUPEH7`
      )
      .then((res) => {
        const activities = res.data.data;

        let activitiesObject = {};

        activities.forEach((activity) => {
          const parks = activity.parks.filter(
            (park) => park.designation === "National Park"
          );
          activitiesObject[activity.name] = parks;
        });
        console.log(activitiesObject);
        setActivitiesObject(activitiesObject);
      });
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  let data = {
    labels: Object.keys(activitiesObject),
    datasets: [
      {
        label: "Number of National Parks",
        data: Object.values(activitiesObject).map((parks) => {
          return parks.length;
        }),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={classes.chartContainer}>
      <Doughnut
        data={data}
        className={classes.padding}
        width={"50%"}
        options={{ maintainAspectRatio: true }}
      />{" "}
    </div>
  );
}

export default ActivitiesVsNP;
