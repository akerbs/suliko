import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    autoWidth: "true",
  },
  link: {
    textDecoration: "none",
  },
}))

export default function LangSwitcher() {
  const classes = useStyles()

  return (
    <div>
      <FormControl className={classes.formControl}>
        {/* <InputLabel id="demo-controlled-open-select-label">Language</InputLabel> */}
        <Select defaultValue={"DEU"}>
          <MenuItem value={"DEU"}>
            <Link to="/deu" className={classes.link}>
              🇩🇪
            </Link>
          </MenuItem>

          <MenuItem value={"RUS"}>
            <Link to="/rus" className={classes.link}>
              🇷🇺
            </Link>
          </MenuItem>

          <MenuItem value={"GEO"}>
            <Link to="/geo" className={classes.link}>
              🇬🇪
            </Link>
          </MenuItem>

          <MenuItem value={"ENG"}>
            <Link to="/eng" className={classes.link}>
              🇬🇧
            </Link>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
