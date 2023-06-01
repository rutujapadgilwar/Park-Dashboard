import React from "react";
import { LoadThingsToDodata } from "./LoadThingsToDoData";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

function ThingsToDo(item) {
  const ThingsToDoData = LoadThingsToDodata(item);
  const parkCode = item.parkCode;
  if (!ThingsToDoData || !parkCode) {
    <Box p={5}>
      <h4>Sorry, Not have any trail or things you can explore</h4>
    </Box>;
    return null;
  }
  const park = ThingsToDoData.filter(
    (p) => p.relatedParks[0]?.parkCode === parkCode
  );
  if (park.length === 0) {
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
          <h4>Sorry, Not have any trail or things you can explore</h4>
        </Box>
        ;
      </div>
    );
  }

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
            {item.url && (
              <Button size="small" onClick={() => openUrl(item.url)}>
                Learn More
              </Button>
            )}
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default ThingsToDo;
