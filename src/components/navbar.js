import React from "react"
import { Link } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    paddingLeft: "50px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "10px",
    },
  },

  navLinkBox: {
    padding: "0px 28px 0px 20px",
    transition: "transform 250ms",
    "&:hover": { transform: "translateY(-2px)", cursor: "pointer" },
    [theme.breakpoints.down("md")]: {
      padding: "0px 10px 0px 5px",
    },
  },

  navLink: {
    textDecoration: "none",
    textShadow: "rgba(255,255,255)  0 0 5px",
    color: "rgba(133,26,29)",
    "&:hover": {
      color: "rgba(255,255,255)",
      textShadow: "rgba(133,26,29) 0 0 5px",
    },
  },
  active: {
    color: "rgba(255,255,255)",
    textShadow: "rgba(133,26,29) 0 0 5px",
  },

  title: {
    flexGrow: 1,
  },
}))

const Navbar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Link
        to="/deu"
        className={classes.navLink}
        activeClassName={classes.active}
      >
        <Box className={classes.navLinkBox}>
          <Typography variant="subtitle2" noWrap className={classes.title}>
            HOME
          </Typography>
        </Box>
      </Link>

      <Link
        to="/deu/about-us"
        className={classes.navLink}
        activeClassName={classes.active}
      >
        <Box className={classes.navLinkBox}>
          <Typography variant="subtitle2" noWrap className={classes.title}>
            ÜBER UNS
          </Typography>
        </Box>
      </Link>

      <Link
        to="/deu/menu"
        className={classes.navLink}
        activeClassName={classes.active}
      >
        <Box className={classes.navLinkBox}>
          <Typography variant="subtitle2" noWrap className={classes.title}>
            MENÜ
          </Typography>
        </Box>
      </Link>

      <Link
        to="/deu/imprint"
        className={classes.navLink}
        activeClassName={classes.active}
      >
        <Box className={classes.navLinkBox}>
          <Typography variant="subtitle2" noWrap className={classes.title}>
            IMPRESSUM
          </Typography>
        </Box>
      </Link>

      <Link
        to="/deu/contact"
        className={classes.navLink}
        activeClassName={classes.active}
      >
        <Box className={classes.navLinkBox}>
          <Typography variant="subtitle2" noWrap className={classes.title}>
            KONTAKT
          </Typography>
        </Box>
      </Link>
    </div>
  )
}

export default Navbar
