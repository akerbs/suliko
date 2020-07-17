import React from "react"
import "./layout.css"
import AppbarAndDrawer from "./appbarAndDrawer"
import Footer from "./footer"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import ModalWindow from "./modalWindow"
import Typography from "@material-ui/core/Typography"
import bgPatternImg from "../images/bgPatternImg.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"
import ListItem from "@material-ui/core/ListItem"

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: "rgba(49, 10, 10)",
    // backgroundImage: `url(${bgPatternImg}) `,
    maxWidth: "100%",
    height: "auto",
    color: "white",
    position: "absolute",
    padding: 0,
    backgroundRepeate: `no-repeat `,
    zIndex: -1,

    backgroundAttachment: "fixed",
    overflow: "hidden",
    backgroundPosition: "center center",

    backgroundSize: "cover",
    // "&:before": {
    //   content: " ",
    //   zIndex: -10,
    // },

    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
    animation: "$sliderBg 8s linear infinite alternate ",
  },

  "@keyframes sliderBg": {
    "0%, 40%": {
      backgroundImage: `url(${img1})`,
    },
    "60%, 100%": {
      backgroundImage: `url(${img2})`,
    },

    // "@keyframes sliderBg": {
    //   "0%, 18%": {
    //     backgroundImage: `url(${img1})`,
    //   },
    //   "20%, 38%": {
    //     backgroundImage: `url(${img2})`,
    //   },
    //   "40%, 58%": {
    //     backgroundImage: `url(${img3})`,
    //   },
    //   "60%, 78%": {
    //     backgroundImage: `url(${img4})`,
    //   },
    //   "80%, 100%": {
    //     backgroundImage: `url(${img5})`,
    //   },
    //   // "72%, 81%": {
    //   //   backgroundImage: `url(${img6})`,
    //   // },
  },
  mediaIcons: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "start",
    margin: 0,
    padding: 0,
  },
  navLink: {
    transition: "transform 250ms",
    "&:hover": { transform: "translateY(-2px)", cursor: "pointer" },
  },

  fontAwesomeIcon: {
    color: "rgba(255,255,255)",
    margin: 5,
    "&:hover": { color: "rgba(133,26,29)" },
  },

  content: {
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
    zIndex: 99,
    [theme.breakpoints.down("sm")]: {},
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,

    background: "rgba(250,250,250, 0.01)",

    [theme.breakpoints.down("sm")]: {
      // padding: "20px 10px",
      marginTop: 0,
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

//////////////////////// Modal ////////////////////////

const Layout = ({ children }, props) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Container className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Container className={classes.content}>
          {/* <div id="back-to-top-anchor" /> */}
          <AppbarAndDrawer className={classes.appbarAndDrawer} />

          <Container maxWidth="md" className={classes.main}>
            {/* <Container className={classes.mediaIcons}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.facebook.com/restaurant.suliko.hamburg"
              className={classes.navLink}
                //  onClick="this.blur()"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" className={classes.fontAwesomeIcon} />    
            </Link>
           
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.instagram.com/suliko_hamburg_"
              className={classes.navLink}
                //  onClick="this.blur()"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" className={classes.fontAwesomeIcon} />
            </Link>
           </Container> */}
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
