import React from "react"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {},
  button: {
    // textTransform: "none",

    padding: 0,
    marginTop: 2,
    // paddingTop: 0,
    color: "rgba(255,255,255)",
    textShadow: "rgba(133,26,29) 0 0 5px",
    // fontSize: 20,
    transition: "transform 250ms",
    "&:hover": { transform: "translateY(-2px)", cursor: "pointer" },

    [theme.breakpoints.down("xs")]: {
      color: "rgba(133,26,29)",
      textShadow: "rgba(255,255,255) 0 0 5px",
    },
  },
  link: {
    textDecoration: "none",
    color: "rgba(133,26,29)",
    textShadow: "rgba(255,255,255) 0 0 5px",
    // fontSize: 14,
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      color: "white",
      textShadow: "rgba(133,26,29) 0 0 5px",
      // fontSize: 10,
    },
  },
}))

export default function SimpleMenu() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [language, setLanguage] = React.useState("deu")

  const handleChange = event => {
    setLanguage(event.target.value)
  }

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <Button
        onChange={handleChange}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.button}
        variant="text"
      >
        🇬🇪
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          value={"deu"}
          primaryText="Profile"
          component={Link}
          to="/deu"
          className={classes.link}
        >
          🇩🇪
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          value={"rus"}
          component={Link}
          to="/rus"
          className={classes.link}
        >
          🇷🇺
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          value={"geo"}
          component={Link}
          to="/geo"
          className={classes.link}
        >
          🇬🇪
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          value={"eng"}
          component={Link}
          to="/eng"
          className={classes.link}
        >
          🇬🇧
        </MenuItem>
      </Menu>
    </div>
  )
}
