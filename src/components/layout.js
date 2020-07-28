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
import bgImg1600 from "../images/bgImg1600.gif"
import ModalWindow from "./modalWindow"
import Fab from "@material-ui/core/Fab"
import scrollTo from "gatsby-plugin-smoothscroll"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import handleViewport from "react-in-viewport"

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
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
  },
  navLink: {
    transition: "transform 250ms",
    "&:hover": { transform: "translateY(-2px)", cursor: "pointer" },
  },
  content: {
    zIndex: 99,
    position: "relative",
    overflowX: "hidden",
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
    },
  },
  reservierenButton: {
    position: "fixed",
    bottom: 5,
    right: 5,
    zIndex: 999,
  },
  scrollToTopButton: {
    position: "fixed",
    bottom: 5,
    left: 5,
    zIndex: 999,
    color: "white",
    "&:hover": {
      // color: "rgba(250,250,250, 0.5)",
    },
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
    [theme.breakpoints.down("sm")]: {
      marginTop: 10,
    },
    [theme.breakpoints.down("xs")]: {},
  },
}))

const Layout = ({ location, children }, props) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  // const elA = document.getElementById("elA")
  // const elB = document.getElementById("elB")

  // const domRect = elA.getBoundingClientRect()

  // console.log(elA)
  // elB.style.color = "tomato"
  // console.log(elB.style)
  // // console.log(elB)
  // console.log(domRect)

  // // domRect.top >= 0 ?
  // const selector = React.createRef()

  // React.componentDidMount = () => {
  //   const rect = selector.current.getBoundingClientRect()
  //   console.log(rect)
  // }

  return (
    <Container className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Container className={classes.content}>
          <div id="abc" ref={selector} />
          <AppbarAndDrawer className={classes.appbarAndDrawer} />
          <Container maxWidth="md" className={classes.main}>
            <Button
              // size="small"
              className={classes.reservierenButton}
              variant="contained"
              color="primary"
              onClick={handleOpen}
            >
              Reservieren
            </Button>

            <Fab
              size="small"
              color="primary"
              aria-label="scrollToTopButton"
              className={classes.scrollToTopButton}
              onClick={() => scrollTo("#abc")}
            >
              <ExpandLessIcon />
            </Fab>

            <Container maxWidth="md" className={classes.forChildren}>
              {children}
            </Container>
          </Container>
          <Footer />
        </Container>
        <ModalWindow onClose={handleClose} open={open} />
      </ThemeProvider>
    </Container>
  )
}
export default Layout
