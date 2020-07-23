import React from "react"
import "./layout.css"
import AppbarAndDrawer from "./appbarAndDrawer-geo"
import Footer from "./footer"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
// import img1 from "../images/1.jpg"
// import img2 from "../images/2.jpg"
// import bgImg320 from "../images/bgImg320.gif"
import bgImg600 from "../images/bgImg600.gif"
import bgImg960 from "../images/bgImg960.gif"
import bgImg1280 from "../images/bgImg1280.gif"
import bgImg1600 from "../images/bgImg1600.gif"
import ModalWindow from "./modalWindow"
// import Scroll from "./scrollToTopBtn"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "rgba(49, 10, 10)",

    maxWidth: "100%",
    height: "auto",
    color: "white",
    position: "absolute",
    padding: 0,
    backgroundRepeate: `no-repeat `,
    zIndex: -9999,
    backgroundAttachment: "fixed",
    overflow: "hidden",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundImage: `url(${bgImg1600}) `,

    // [theme.breakpoints.up("sm")]: {
    //   backgroundImage: `url(${bgImg960}) `,
    // },
    // [theme.breakpoints.up("md")]: {
    //   backgroundImage: `url(${bgImg1280}) `,
    // },
    // [theme.breakpoints.up("lg")]: {
    //   backgroundImage: `url(${bgImg1600}) `,
    // },

    // animation: "$sliderBg 10s ease-in-out infinite alternate ",
  },

  // "@keyframes sliderBg": {
  //   "0%, 50%": {
  //     backgroundImage: `url(${img1})`,
  //   },
  //   "50.01%, 100%": {
  //     backgroundImage: `url(${img2})`,
  //   },
  // },

  navLink: {
    transition: "transform 250ms",
    "&:hover": { transform: "translateY(-2px)", cursor: "pointer" },
  },

  content: {
    zIndex: 99,
    position: "relative",
    overflowX: "hidden",
    // height: "580px",

    maxWidth: "100vw", // 100% view width
    paddingTop: 50,
    paddingLeft: 100,
    paddingRight: 100,

    [theme.breakpoints.down("md")]: {
      padding: 20,
      paddingTop: 30,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
    },

    [theme.breakpoints.down("xs")]: {
      padding: 5,
      paddingTop: 20,
      maxHeight: " 100vh", //100% view height
      // margin: 0,
    },
  },
  appbarAndDrawer: {},
  reservierenButton: {
    position: "fixed",
    bottom: 5,
    right: 5,
    zIndex: 999,
    [theme.breakpoints.down("sm")]: {},
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    marginBottom: 0,

    background: "rgba(250,250,250, 0.01)",

    [theme.breakpoints.down("sm")]: {
      // padding: "20px 10px",
      marginTop: 30,
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0px 10px",
    },
  },

  forChildren: {
    marginTop: 100,
    // padding: 50,
    margin: 0,
    padding: 0,

    // background: "rgba(255,218,82, 0.5)",
    // background: "rgba(49, 10, 10, 0.01 )",
    [theme.breakpoints.down("sm")]: {
      marginTop: 10,
      // padding: 10,
      // paddingTop: 20,
    },
    [theme.breakpoints.down("xs")]: {
      // padding: 5,
      // paddingTop: 30,
    },
  },

  // x: {
  //   position: "fixed",
  //   bottom: theme.spacing(2),
  //   right: theme.spacing(2),
  // },
}))

// function ScrollTop(props) {
//   const { children, window } = props
//   const classes = useStyles()
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 1,
//   })

//   const handleClick = event => {
//     const anchor = (event.target.ownerDocument || document).querySelector(
//       "#back-to-top-anchor"
//     )
//     if (anchor) {
//       anchor.scrollIntoView({ behavior: "smooth", block: "center" })
//     }
//   }
//   return (
//     <Zoom in={trigger}>
//       <div onClick={handleClick} role="presentation" className={classes.x}>
//         {children}
//       </div>
//     </Zoom>
//   )
// }

const Layout = ({ location, children }, props) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // const handleClick = () => {
  //   window[`scrollTo`]({ top: document.body.scrollHeight, behavior: `smooth` })
  // }

  return (
    <Container className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <iframe
          style={{ zIndex: 999 }}
          width="50%"
          height="20"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/15237004&color=%23851a1d&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        />

        <Container className={classes.content}>
          {/* <Scroll showBelow={250} /> */}
          {/* <div id="back-to-top-anchor" /> */}
          <AppbarAndDrawer className={classes.appbarAndDrawer} />

          <Container maxWidth="md" className={classes.main}>
            <Button
              className={classes.reservierenButton}
              variant="contained"
              color="primary"
              onClick={handleOpen}
            >
              Reservieren
            </Button>

            <Container maxWidth="md" className={classes.forChildren}>
              {children}
            </Container>

            {/* <ScrollTop {...props}>
              <Fab
                color="secondary"
                size="small"
                aria-label="scroll back to top"
              >
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTop> */}
          </Container>

          <Footer />
        </Container>
        <ModalWindow onClose={handleClose} open={open} />
      </ThemeProvider>
    </Container>
  )
}

export default Layout