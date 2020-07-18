import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: 0,
    padding: 0,
    //  margin: 0,
    // margin: theme.spacing(1),
    autoWidth: "true",
  },
  select: {},

  link: {
    textDecoration: "none",
    color: "white",
    textShadow: "rgba(133,26,29) 0 0 5px",
    fontWeight: 900,
  },
}))

export default function LangSwitcher() {
  const classes = useStyles()

  return (
    <div>
      <FormControl className={classes.formControl}>
        {/* <InputLabel id="demo-controlled-open-select-label">Language</InputLabel> */}
        <Select defaultValue={"DEU"} className={classes.select}>
          <MenuItem value={"DEU"}>
            <Link to="/deu" className={classes.link}>
              {/* 🇩🇪 */}
              Deu
            </Link>
          </MenuItem>

          <MenuItem value={"RUS"}>
            <Link to="/rus" className={classes.link}>
              {/* 🇷🇺 */}
              Rus
            </Link>
          </MenuItem>

          <MenuItem value={"GEO"}>
            <Link to="/geo" className={classes.link}>
              {/* 🇬🇪 */}
              Geo
            </Link>
          </MenuItem>

          <MenuItem value={"ENG"}>
            <Link to="/eng" className={classes.link}>
              {/* 🇬🇧 */}
              Eng
            </Link>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
