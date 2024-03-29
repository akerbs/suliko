import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"
import logoGeorg from "../images/logo_georg.png"
// import "animate.css"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // minHeight: "100vh",
    paddingTop: 200,
    textAlign: "center",
    color: "white",
    textShadow: "rgba(133,26,29)  0 0 5px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 50,
      paddingTop: 50,
    },
  },
  footerContainer: {
    padding: theme.spacing(1, 1),
    // marginTop: "auto",
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
  logoGeorgImg: {
    zIndex: 9999,
    maxWidth: 200,
    marginBottom: 5,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 150,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 100,
    },
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div
        style={{
          paddingTop: 100,
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <img
          // data-sal="zoom-in"
          // data-sal-delay="300"
          // data-sal-easing="ease"
          // data-sal-duration="infinite"
          className={classes.logoGeorgImg}
          src={logoGeorg}
          alt="logo2"
        />
      </div>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.footerContainer}>
        <Typography variant="body2">
          <Typography variant="body1">
            {" © "} {new Date().getFullYear()} Suliko. All Rights Reserved
            <br />{" "}
            {/* <Typography variant="body2">All Rights Reserved</Typography> */}
          </Typography>
          {/* Created by{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://kerbs.now.sh/"
            className={classes.extLink}
          >
            Anatol Kerbs
          </Link> */}
        </Typography>
      </Container>
    </div>
  )
}

export default Footer
