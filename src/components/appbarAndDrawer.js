import React from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import logo from "../images/logo.gif"
import Navbar from "./navbar"
import PropTypes from "prop-types"
import Hidden from "@material-ui/core/Hidden"
import withWidth from "@material-ui/core/withWidth"
import LangSwitcher from "./langSwitcher"
import { Link } from "gatsby"
import Container from "@material-ui/core/Container"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu"
import HomeIcon from "@material-ui/icons/Home"
import InfoIcon from "@material-ui/icons/Info"
import AnnouncementIcon from "@material-ui/icons/Announcement"
import PhoneIcon from "@material-ui/icons/Phone"
import { ThemeProvider } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

import x3 from "../images/x3.png"
import x4 from "../images/x4.png"

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

  logoImg: {
    maxWidth: 370,

    [theme.breakpoints.down("md")]: {
      maxWidth: 330,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 260,
    },
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
    backgroundImage: `url(${x3}) `,
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
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    margin: 0,
    padding: 0,
  },
  drawerItems: {
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
  },

  drawerItem: {
    textDecoration: "none",
    color: "rgba(133,26,29)",
    width: "100vw",

    // fontWeight: 900,
    // fontSize: "1px",
    // letterSpacing: 1,
    // padding: 0,

    [theme.breakpoints.down("md")]: {
      letterSpacing: "1px",
    },
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
  const { width } = props

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
            >
              <Hidden mdUp>
                <MenuIcon className={classes.menuIcon} />
              </Hidden>
            </IconButton>

            <Link to="/deu">
              <img src={logo} alt="logo" className={classes.logoImg} />
            </Link>

            <Hidden smDown>
              <Navbar />
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
            <IconButton onClick={handleDrawerClose} edge="end">
              <MenuIcon
                color="primary"
                style={{
                  fontSize: 40,
                }}
              />
            </IconButton>
          </div>
          {/* <Divider /> */}
          <div className={classes.drawerItems}>
            <Link to="/deu" className={classes.drawerItem}>
              <ListItem button key={"HOME"}>
                {/* <ListItemIcon>
              <HomeIcon />
            </ListItemIcon> */}
                <ListItemText
                  primary={
                    <Typography align="center" variant="h6">
                      HOME
                    </Typography>
                  }
                />
              </ListItem>
            </Link>

            <Link to="/deu/about-us" className={classes.drawerItem}>
              <ListItem button key={"ÜBER UNS"}>
                {/* <ListItemIcon>
              <InfoIcon />
            </ListItemIcon> */}
                <ListItemText
                  primary={
                    <Typography align="center" variant="h6">
                      ÜBER UNS
                    </Typography>
                  }
                />
              </ListItem>
            </Link>

            <Link to="/deu/menu" className={classes.drawerItem}>
              <ListItem button key={"MENÜ"}>
                {/* <ListItemIcon>
              <RestaurantMenuIcon />
            </ListItemIcon> */}
                <ListItemText
                  primary={
                    <Typography align="center" variant="h6">
                      MENÜ
                    </Typography>
                  }
                />
              </ListItem>
            </Link>

            <Link to="/deu/imprint" className={classes.drawerItem}>
              <ListItem button key={"IMPRESSUM"}>
                {/* <ListItemIcon>
              <AnnouncementIcon />
            </ListItemIcon> */}
                <ListItemText
                  primary={
                    <Typography align="center" variant="h6">
                      IMPRESSUM
                    </Typography>
                  }
                />
              </ListItem>
            </Link>

            <Link to="/deu/contact" className={classes.drawerItem}>
              <ListItem button key={"KONTAKT"}>
                {/* <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon> */}
                <ListItemText
                  primary={
                    <Typography align="center" variant="h6">
                      KONTAKT
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
          </div>
        </Drawer>
      </ThemeProvider>
    </div>
  )
}

AppbarAndDrawer.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
}
export default withWidth()(AppbarAndDrawer)
