import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import axios from "axios";

function Alerts(props) {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetchAlerts();
  }, []);

  const fetchAlerts = () => {
    axios
      .get(
        `https://developer.nps.gov/api/v1/alerts?API_Key=OaR7jmqSa22JAcsym9lVfStp58LmCqH9JdZUPEH7&parkCode=${props.parkCode}`
      )
      .then((res) => {
        setAlerts(res.data.data);
      });
  };

  const getSeverityLevel = (category) => {
    if (category === "Park Closure") {
      return "info";
    } else if (category === "Danger") {
      return "error";
    } else if (category === "Caution") {
      return "warning";
    } else if (category === "Information") {
      return "success";
    }
  };

  const alertMessages = alerts.map((alert) => {
    return {
      id: alert.id,
      severity: getSeverityLevel(alert.category),
      title: alert.title,
      description: alert.description,
    };
  });

  alertMessages.sort((a, b) => {
    const severityOrder = ["error", "warning", "info", "success"];
    return (
      severityOrder.indexOf(a.severity) - severityOrder.indexOf(b.severity)
    );
  });

  const renderedAlerts = alertMessages.map((alert) => {
    return (
      <Alert key={alert.id} severity={alert.severity}>
        <AlertTitle>
          <strong>{alert.title}</strong>
        </AlertTitle>
        {alert.description}
      </Alert>
    );
  });

  return (
    <div>
      <Stack sx={{ width: "100%" }} className="scroll-y" spacing={2}>
        {renderedAlerts}
      </Stack>
    </div>
  );
}

export default Alerts;
