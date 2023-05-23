import getActivityIcon from "./ActivitiesIcons";
import { LoadParkData } from "../../LoadParkData";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Grid,
  Box,
} from "@material-ui/core";
import List from "@mui/material/List";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  customBorderRadius: {
    borderRadius: 15,
    margin: theme.spacing(1.5),
  },
}));
function ParkActivities(item) {
  const classes = useStyles();
  const parkData = LoadParkData(item);
  const parkCode = item.parkCode;
  const park = parkData.find((p) => p.parkCode === parkCode);
  const ParkActivities = park ? park.activities : null;
  if (!ParkActivities) {
    return (
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10xwvh",
        }}
      >
        <Box p={5}>
          <h4>Sorry, No avtivities</h4>
        </Box>
      </div>
    );
  }
  const columns = Math.ceil(2);
  return (
    <div sx={{ display: "flex", flexDirection: "column" }}>
      <Grid container spacing={5}>
        {Array.from({ length: columns }).map((_, i) => (
          <Grid
            key={i}
            item
            sx={{ display: "flex", justifyContent: "center", gap: 2 }}
          >
            {ParkActivities.slice(i * 10, (i + 1) * 10).map((activity) => (
              <Paper
                key={activity.name}
                elevation={10}
                className={classes.customBorderRadius}
              >
                <Box p={5}>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        {getActivityIcon(activity.name)}
                      </ListItemAvatar>
                      <ListItemText primary={activity.name} />
                    </ListItem>
                  </List>
                </Box>
              </Paper>
            ))}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ParkActivities;
