import React from "react";
import { LoadCampgroundData } from "./LoadCampgroundData";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
function CampgroundInformation(item) {
  const CampgroundInformation = LoadCampgroundData(item);
  const parkCode = item.parkCode;
  if (!CampgroundInformation || !parkCode) {
    console.log("Null");
    return null; // Return null if ThingsToDoData or parkCode is undefined
  }
  const campground = CampgroundInformation.filter(
    (p) => p.parkCode === parkCode && p.campsites.totalSites > 5
  );
  console.log(campground);
  const openUrl = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", overflowY: "auto" }}>
      {campground.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 690, margin: "1rem" }}>
          <CardMedia
            component="img"
            height="140"
            image={item.images[0]?.url}
            alt={item.images[0]?.altText}
          />
          <CardContent>
            <Typography gutterBottom variant="h7" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => openUrl(item.url)}>Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
export default CampgroundInformation;
