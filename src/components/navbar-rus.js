import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    marginLeft: "25px",
  },
  navLink: {
    margin: "0 10px 0 20px",
    textDecoration: "none",
    color: "#000",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "15px",
    letterSpacing: "3px",
  },
}))

export default function Navbar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Link to="/rus" className={classes.navLink}>
        ГЛАВНАЯ
      </Link>
      <Link to="/rus/about-us" className={classes.navLink}>
        О НАС
      </Link>
      <Link to="/rus/menu" className={classes.navLink}>
        МЕНЮ
      </Link>
      <Link to="/rus/imprint" className={classes.navLink}>
        РЕЦЕНЗИИ
      </Link>
      <Link to="/rus/contact" className={classes.navLink}>
        КОНТАКТ
      </Link>
    </div>
  )
}
