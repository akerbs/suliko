import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "50px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "10px",
    },
  },

  navLink: {
    margin: "0 30px",
    textDecoration: "none",
    textShadow: "rgba(255,255,255)  0 0 5px",
    color: "rgba(133,26,29)",

    fontWeight: 900,
    fontSize: "15px",
    letterSpacing: "3px",
    // transition: "transform 250ms",
    "&:hover": {
      // transform: "translateY(-2px)",
      // cursor: 'pointer',
      color: "rgba(255,255,255)",
      textShadow: "rgba(133,26,29) 0 0 5px",
    },
    [theme.breakpoints.down("md")]: {
      margin: "0 10px",
      letterSpacing: "1px",
    },
  },
  title: {
    flexGrow: 1,
  },
}))

const Navbar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h6" noWrap className={classes.title}>
        <Link to="/deu" className={classes.navLink}>
          HOME
        </Link>

        <Link to="/deu/about-us" className={classes.navLink}>
          ÜBER UNS
        </Link>

        <Link to="/deu/menu" className={classes.navLink}>
          MENÜ
        </Link>

        <Link to="/deu/imprint" className={classes.navLink}>
          IMPRESSUM
        </Link>

        <Link to="/deu/contact" className={classes.navLink}>
          KONTAKT
        </Link>
      </Typography>
    </div>
  )
}

export default Navbar
