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
import ModalWindow from "./modalWindow"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "rgba(49, 10, 10)",
    backgroundImage: `url(${img1}) `,
    maxWidth: "100%",
    height: "auto",
    color: "white",
    position: "fixed",
    padding: "0px 0px 0px 100px",
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

    [theme.breakpoints.down("md")]: {
      padding: "80px 80px 0px 80px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "15px 50px 0px 50px",
    },
    [theme.breakpoints.down("xs")]: {
      // padding: "15px 5px 0px 5px",
      padding: 0,
    },
    // animation: "$sliderBg 50s linear infinite alternate ",
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
  // },

  content: {
    position: "relative",
    overflowX: "hidden",
    // height: "580px",
    maxHeight: " 100vh", //100% view height
    maxWidth: "100vw", // 100% view width
    paddingTop: 50,
    [theme.breakpoints.down("xs")]: {
      padding: 5,
      paddingTop: 20,
      // margin: 0,
    },
  },
  reservierenButton: {
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      bottom: 5,
      right: 5,
      zIndex: 1,
    },
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

  main2: {
    marginTop: 10,
    padding: 50,
    background: "rgba(49, 10, 10, 0.75 )",
    [theme.breakpoints.down("sm")]: {
      padding: 10,
      paddingTop: 20,
    },
    [theme.breakpoints.down("xs")]: {
      padding: 5,
      paddingTop: 30,
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
          <AppbarAndDrawer />

          <Container maxWidth="md" className={classes.main}>
            <Button
              className={classes.reservierenButton}
              variant="contained"
              color="primary"
              onClick={handleOpen}
            >
              Reservieren
            </Button>
            <Container maxWidth="md" className={classes.main2}>
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
