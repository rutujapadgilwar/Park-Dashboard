import getActivityIcon from "./ActivitiesIcons";
import { LoadParkData } from "../../LoadParkData";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
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
          height: "10vh",
        }}
      >
        <Box p={5}>
          <h4>Sorry, No activities</h4>
        </Box>
      </div>
    );
  }

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "500px",
        overflowY: "auto",
      }}
    >
      {ParkActivities.map((activity) => (
        <Paper
          key={activity.name}
          elevation={10}
          className={classes.customBorderRadius}
        >
          <Box p={1}>
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
    </div>
  );
}

export default ParkActivities;
