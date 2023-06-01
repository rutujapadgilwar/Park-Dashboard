import React from "react";
import { LoadCampgroundData } from "../Campgrounds/LoadCampground";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
function CampgroundInformation(item) {
  const CampgroundInformation = LoadCampgroundData(item);
  const parkCode = item.parkCode;
  if (!CampgroundInformation || !parkCode) {
    return null;
  }
  const campground = CampgroundInformation.filter(
    (p) => p.parkCode === parkCode
  );
  if (campground.length === 0) {
    return (
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      >
        <Box p={5}>
          <h4>Sorry, Not have any campground info</h4>
        </Box>
        ;
      </div>
    );
  }
  const openUrl = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", overflowY: "auto" }}
    >
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
            {item.regulationsurl && (
              <Button size="small" onClick={() => openUrl(item.regulationsurl)}>
                Learn More
              </Button>
            )}
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
export default CampgroundInformation;
