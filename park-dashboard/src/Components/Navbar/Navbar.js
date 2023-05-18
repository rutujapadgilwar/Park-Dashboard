import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
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
    padding: "20px",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#333333",
      color: "white",
    },
    "&:active": {
      backgroundColor: "#faa810",
    },
  },
  navbarLink: {
    height: "100%",
    font: "boldest",
    display: "block",
    color: theme.palette.common.white,
    textDecoration: "none",
  },
  header: {
    position: "fixed",
    backgroundColor: "black",
    color: "White",
    boxShadow: "1px 0px 0px 0px",
  },
}));
const theme = createTheme({
  palette: {
    primary: {
      main: "#FF000",
    },
  },
});
const Navbar = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar className={classes.header}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" className={classes.navbarLink}>
                Park Dashboard
                <ParkIcon className={classes.parklogo} />
              </Link>
            </Typography>
            <Button color="inherit" className={classes.navbarButton}>
              <Link to="/GenericCharts" className={classes.navbarLink}>
                Generic Charts
              </Link>
            </Button>
            <Button color="inherit" className={classes.navbarButton}>
              <Link to="/NationalParkCharts" className={classes.navbarLink}>
                National Park Charts
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};
export default Navbar;
