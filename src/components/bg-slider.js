import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import bgPatternImg from "../images/bgPatternImg.png"

const useStyles = makeStyles(theme => ({
  cbSlideshow: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 0,
    "&:after": {
      position: "fixed",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      zIndex: 0,
      content: "",
      background: `transparent url(${bgPatternImg}) repeat top left`,
    },
  },
  span1: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    color: "transparent",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "none",
    opacity: 0,
    zIndex: 0,
    animation: "imageAnimation 11s linear infinite 0s",
    backgroundImage: `url(${img1})`,
  },
  span2: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    color: "transparent",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "none",
    opacity: 0,
    zIndex: 0,
    animation: "imageAnimation 11s linear infinite 0s",
    backgroundImage: `url(${img2})`,
    animationDelay: "5s",
  },
  "@keyframes imageAnimation": {
    "0%": { opacity: 0, animationTimingFunction: "ease-in" },
    "50%": { opacity: 1, animationTimingFunction: "ease-out" },
    "100%": { opacity: 0 },
  },
}))

const BgSlider = () => {
  const classes = useStyles()

  return (
    <ul class={classes.cbSlideshow}>
      <li class={classes.li}>
        <span className={classes.span1} />
      </li>
      <li class={classes.li}>
        <span className={classes.span2} />
      </li>
    </ul>
  )
}

export default BgSlider
