import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"

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
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    // backgroundColor:
    //   theme.palette.type === "light"
    //     ? theme.palette.grey[200]
    //     : theme.palette.grey[800],
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

      <footer className={classes.footer}>
        <Container maxWidth="sm">
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
      </footer>
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
