import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import IconButton from "@material-ui/core/IconButton"

const useStyles = makeStyles(theme => ({
  toTop: {
    zIndex: 2,
    position: "fixed",
    bottom: "7vh",
    backgroundColor: "rgba(133,26,29)",
    color: "black",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "#397BA6",
      backgroundColor: "rgba(133,26,29)",
    },
    [theme.breakpoints.up("xs")]: {
      right: "5%",
      // backgroundColor: "rgb(220,220,220,0.7)",
    },
    [theme.breakpoints.up("lg")]: {
      right: "6.5%",
    },
  },
}))

// const handleClick = () => {
//   window[`scrollTo`]({ top: document.body.scrollHeight, behavior: `smooth` })
// }

// <Scroll showBelow={250} />

const Scroll = () => {
  const classes = useStyles()

  const [show, setShow] = useState(250 ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > 250) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  useEffect(() => {
    if (250) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <div>
      {show && (
        <IconButton
          onClick={handleClick}
          className={classes.toTop}
          aria-label="to top"
          component="span"
        >
          <ExpandLessIcon />
        </IconButton>
      )}
    </div>
  )
}
export default Scroll
