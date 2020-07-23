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
        🇷🇺
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

// import React from "react"
// import { makeStyles } from "@material-ui/core/styles"
// import Menu from "@material-ui/core/Menu"
// import MenuItem from "@material-ui/core/MenuItem"
// import TextField from "@material-ui/core/TextField"
// import Select from "@material-ui/core/Select"
// import { Link } from "gatsby"

// const useStyles = makeStyles(theme => ({
//   link: {
//     textDecoration: "none",
//     color: "white",
//     textShadow: "rgba(133,26,29) 0 0 5px",
//     fontWeight: 500,
//   },
// }))

// export default function LangSwitcher() {
//   const classes = useStyles()
//   const [language, setLanguage] = React.useState("deu")

//   const handleChange = event => {
//     setLanguage(event.target.value)
//   }

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <div>
//         <TextField
//           id="standard-select-currency"
//           select
//           value={language}
//           onChange={handleChange}
//         >
//           <MenuItem
//             value={"deu"}
//             component={Link}
//             to="/deu"
//             className={classes.link}
//           >
//             Deu
//           </MenuItem>

//           <MenuItem
//             value={"rus"}
//             component={Link}
//             to="/rus"
//             className={classes.link}
//           >
//             Rus
//           </MenuItem>

//           <MenuItem
//             value={"geo"}
//             component={Link}
//             to="/geo"
//             className={classes.link}
//           >
//             Geo
//           </MenuItem>

//           <MenuItem
//             value={"eng"}
//             component={Link}
//             to="/eng"
//             className={classes.link}
//           >
//             Eng
//           </MenuItem>
//         </TextField>
//       </div>
//     </form>
//   )
// }

/* <Select defaultValue={"DEU"} className={classes.select}>
<MenuItem
  value={"DEU"}
  component={Link}
  to="/deu"
  className={classes.link}
>
  Deu
</MenuItem>

<MenuItem
  value={"RUS"}
  component={Link}
  to="/rus"
  className={classes.link}
>
  Rus
</MenuItem>

<MenuItem
  value={"GEO"}
  component={Link}
  to="/geo"
  className={classes.link}
>
  Geo
</MenuItem>

<MenuItem
  value={"ENG"}
  component={Link}
  to="/eng"
  className={classes.link}
>
  Eng
</MenuItem>
</Select> */
