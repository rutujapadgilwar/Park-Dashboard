import React from "react";
import { LoadThingsToDodata } from "./LoadThingsToDoData";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

function ThingsToDo(item) {
  const ThingsToDoData = LoadThingsToDodata(item);
  const parkCode = item.parkCode;
  if (!ThingsToDoData || !parkCode) {
    console.log("Null");
    return null; // Return null if ThingsToDoData or parkCode is undefined
  }
  const park = ThingsToDoData.filter(
    (p) => p.relatedParks[0]?.parkCode === parkCode
  );
  const openUrl = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div>
      {park.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 690, margin: "1rem" }}>
          <CardMedia
            component="img"
            height="140"
            image={item.images[0]?.url}
            alt={item.images[0]?.altText}
          />
          <CardContent>
            <Typography gutterBottom variant="h7" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.shortDescription}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => openUrl(item.url)}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default ThingsToDo;
