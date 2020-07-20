import React from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import CssBaseline from "@material-ui/core/CssBaseline"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu"
import CloseIcon from "@material-ui/icons/Close"
import Navbar from "./navbar"
import PropTypes from "prop-types"
import Hidden from "@material-ui/core/Hidden"
import withWidth from "@material-ui/core/withWidth"
import LangSwitcher from "./langSwitcher"
import { Link } from "gatsby"
import { ThemeProvider } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

import logo2 from "../images/logo2.gif"
import bgPatternImg from "../images/bgPatternImg.png"
import x4 from "../images/x4.png"
import x5 from "../images/logo_465x320.png"
import Container from "@material-ui/core/Container"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

const drawerWidth = "auto"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  menuIcon: {
    position: "fixed",
    // color: "rgba(133,26,29)",
    fontSize: 40,
  },
  navLink: {
    width: "100vw",
    color: "rgba(133,26,29)",
  },
  logoImg: {
    marginBottom: 0,
    paddingBottom: 0,
    maxWidth: 370,
    [theme.breakpoints.down("md")]: {
      maxWidth: 330,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 260,
    },
  },
  navMediaLink: {
    transition: "transform 250ms",
    "&:hover": { transform: "translateY(-2px)", cursor: "pointer" },
  },
  fontAwesomeIcon: {
    color: "rgba(133,26,29)",
    // margin: 5,
    "&:hover": { color: "rgba(255,255,255)" },
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  toolbar: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justify: "flex-start",
      alignItems: "flex-end",
    },
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundImage: `url(${bgPatternImg}) `,
    backgroundRepeat: "repeat",
    overflowX: "hidden",
    width: drawerWidth,
    height: "100vh",

    // background: "transparent",
    // background: "rgba(0, 0, 0, 0.5)",
    // background: "rgba(255, 255, 255, 1)",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",

    // margin: 0,
    // padding: 0,
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  drawerItem: {
    textDecoration: "none",
    color: "rgba(133,26,29)",
    width: "100vw",
  },
  active: {
    color: "rgba(255,255,255)",
    textShadow: "rgba(133,26,29) 0 0 5px",
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}))

const AppbarAndDrawer = props => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          elevation={0}
          color="transparent"
          position="static"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
              style={{ marginRight: 5, marginTop: 5, marginBottom: 0 }}
            >
              <Hidden mdUp>
                <MenuIcon className={classes.menuIcon} />
              </Hidden>
            </IconButton>

            <Link to="/deu">
              <img src={logo2} alt="logo" className={classes.logoImg} />
            </Link>

            <Hidden smDown>
              <Navbar />
              {/* <Container className={classes.mediaIcons}> */}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.facebook.com/restaurant.suliko.hamburg"
                className={classes.navMediaLink}
                //  onClick="this.blur()"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="1x"
                  className={classes.fontAwesomeIcon}
                  style={{ marginRight: 10 }}
                />
              </Link>

              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.instagram.com/suliko_hamburg_"
                className={classes.navMediaLink}
                //  onClick="this.blur()"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="1x"
                  className={classes.fontAwesomeIcon}
                  style={{ marginRight: 20 }}
                />
              </Link>
              {/* </Container> */}
            </Hidden>

            <LangSwitcher />
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="top"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton
              onClick={handleDrawerClose}
              edge="end"
              style={{ marginRight: 5, marginTop: 5, marginBottom: 0 }}
            >
              <CloseIcon
                color="primary"
                style={{
                  fontSize: 40,
                }}
              />
            </IconButton>
          </div>

          {/* <List className={classes.list}> */}
          {/* <div className={classes.drawerItems}> */}
          <Link
            to="/deu"
            className={classes.drawerItem}
            activeClassName={classes.active}
          >
            <ListItem button key={"HOME"}>
              <ListItemText
                primary={
                  <Typography align="center" variant="h6">
                    HOME
                  </Typography>
                }
              />
            </ListItem>
          </Link>

          <Link
            to="/deu/about-us"
            className={classes.drawerItem}
            activeClassName={classes.active}
          >
            <ListItem button key={"ÜBER UNS"}>
              <ListItemText
                primary={
                  <Typography align="center" variant="h6">
                    ÜBER UNS
                  </Typography>
                }
              />
            </ListItem>
          </Link>

          <Link
            to="/deu/menu"
            className={classes.drawerItem}
            activeClassName={classes.active}
          >
            <ListItem button key={"MENÜ"}>
              <ListItemText
                primary={
                  <Typography align="center" variant="h6">
                    MENÜ
                  </Typography>
                }
              />
            </ListItem>
          </Link>

          <Link
            to="/deu/imprint"
            className={classes.drawerItem}
            activeClassName={classes.active}
          >
            <ListItem button key={"IMPRESSUM"}>
              <ListItemText
                primary={
                  <Typography align="center" variant="h6">
                    IMPRESSUM
                  </Typography>
                }
              />
            </ListItem>
          </Link>

          <Link
            to="/deu/contact"
            className={classes.drawerItem}
            activeClassName={classes.active}
          >
            <ListItem button key={"KONTAKT"}>
              <ListItemText
                primary={
                  <Typography align="center" variant="h6">
                    KONTAKT
                  </Typography>
                }
              />
            </ListItem>
          </Link>

          {/* <Tooltip
             id="instagram-facebook"
             title="Follow us on facebook"
              placement={window.innerWidth > 959 ? "top" : "left"}
             classes={{ tooltip: classes.tooltip }}
              > */}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://www.facebook.com/restaurant.suliko.hamburg"
            className={classes.navLink}
            //  onClick="this.blur()"
          >
            <ListItem
              button
              key={"facebook"}
              style={{
                display: "block",
                textAlign: "center",
                paddingTop: 15,
              }}
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </ListItem>
          </Link>
          {/* </Tooltip> */}

          {/* <Tooltip
               id="instagram-facebook"
               title="Follow us on facebook"
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
                > */}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://www.instagram.com/suliko_hamburg_"
            className={classes.navLink}
            //  onClick="this.blur()"
          >
            <ListItem
              button
              key={"instagram"}
              style={{
                display: "block",
                textAlign: "center",
                paddingTop: 15,
              }}
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </ListItem>
          </Link>
          {/* </Tooltip> */}
          {/* </div> */}
          {/* </List> */}
        </Drawer>
      </ThemeProvider>
    </div>
  )
}

AppbarAndDrawer.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
}
export default withWidth()(AppbarAndDrawer)
