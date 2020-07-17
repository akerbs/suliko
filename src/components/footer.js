import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"
import logoGeorg from "../images/logo_georg.png"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // minHeight: "100vh",
    marginTop: 200,
    textAlign: "center",
    color: "white",
    textShadow: "rgba(133,26,29)  0 0 5px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 35,
    },
  },
  footerContainer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
  },
  extLink: {
    cursor: "pointer",
    color: "white",
    textShadow: "rgba(133,26,29)  0 0 5px",
    "&:hover": {
      textDecoration: "none",
      color: "rgba(133,26,29)",
      textShadow: "white 0 0 5px",
    },
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.footerContainer}>
        <img src={logoGeorg} alt="logo2" className={classes.logoGeorgImg} />
        <Typography variant="body2">
          <Copyright />
          Created by{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://kerbs.now.sh/"
            className={classes.extLink}
          >
            Anatol Kerbs
          </Link>
        </Typography>
      </Container>
    </div>
  )
}

export default Footer

function Copyright() {
  return (
    <Typography variant="body1">
      {" © "} Suliko. {new Date().getFullYear()} <br />{" "}
      {/* <Typography variant="body2">All Rights Reserved</Typography> */}
    </Typography>
  )
}
