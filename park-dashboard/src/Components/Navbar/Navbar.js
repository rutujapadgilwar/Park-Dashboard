import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import ParkIcon from "@mui/icons-material/Park";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  parklogo: {
    color: "green",
    marginRight: theme.spacing(1),
  },
  navbarButton: {
    height: "100%",
    display: "block",
    padding: "15px",
    alignItems: "center",
    textDecoration: "none",
    color: theme.palette.common.white,

    "&:hover": {
      backgroundColor: "#333333",
      color: "white",
    },
    "&:active": {
      backgroundColor: "#faa810",
    },
  },
  header: {
    position: "fixed",
    backgroundColor: "black",
  },
}));
const theme = createTheme({
  palette: {
    primary: {
      main: "#FF0000",
    },
  },
});

const Navbar = () => {
  const classes = useStyles();
  const isLargeScreen = useMediaQuery("(min-width: 700px)");
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar className={classes.header}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Button color="inherit" className={classes.navbarLink}>
                <Link to="/" className={classes.navbarButton}>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <ParkIcon className={classes.parklogo} />
                    </Grid>
                    {isLargeScreen && <Grid item>Park Dashboard</Grid>}
                  </Grid>
                </Link>
              </Button>
            </Typography>
            <Button color="inherit" className={classes.navbarLink}>
              <Link to="/GenericCharts" className={classes.navbarButton}>
                Generic Charts
              </Link>
            </Button>
            <Button color="inherit" className={classes.navbarLink}>
              <Link to="/NationalParkCharts" className={classes.navbarButton}>
                {isLargeScreen ? "National Park Charts" : "Park Charts"}
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;
