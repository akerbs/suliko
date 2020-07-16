import React from "react"
import Layout from "../../components/layout"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import ScheduleIcon from "@material-ui/icons/Schedule"

const useStyles = makeStyles(theme => ({
  container: {
    position: "relative",
    overflow: "hidden",
    height: 300,
    width: "100%",
    paddingTop: "50%",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "100%",
    },
  },

  responsiveIframe: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: 600,
    border: 0,
    marginTop: -150,
  },
}))

export default () => {
  const classes = useStyles()

  return (
    <Layout>
      <Container
        maxWidth="md"
        style={{
          margin: 0,
          paddingTop: 10,
          padding: 0,
          // background: "rgba(255,255,255, 0.75)",
        }}
      >
    <Container
          style={{
            background: "rgba(49, 10, 10, 0.75)",
            paddingTop: 40,
           padding: 10,
            marginTop: 50,
            borderRadius: 10,

          }}
        >
         <Typography
            variant="body1"
            align="center"
            style={{ lineHeight: 2 }}
            color="secondary"
          >
          <HomeIcon style={{ fontSize: 20 }} /> Mittelweg 24, 20148 Hamburg
          <br />
          <PhoneIcon style={{ fontSize: 20 }} /> +49(0)40 49201953 <br />
          <EmailIcon style={{ fontSize: 20 }} /> info@restaurant-suliko.de
          <br /> <br />
          <ScheduleIcon style={{ fontSize: 20 }} /> Öffnungszeiten <br />
          Mo- Do 12:00 - 15:00, 17:00 - 22:00 <br />
          Fr 12:00 - 15:00, 17:00 - 24:00 <br />
          Sa 17:00 - 24:00 <br />
          Son 15:00 - 22:00 <br />
          <br />
        </Typography>
          <Container className={classes.container}>
        <iframe
          className={classes.responsiveIframe}
          src="https://www.google.com/maps/d/u/0/embed?mid=1UQMf_-g-DjVCWRAkAVCDWjVNGXkvW4xc"
        ></iframe>
      </Container>
      </Container>
    
       </Container>
    </Layout>
  )
}

// https://www.google.com/maps/d/u/0/embed?mid=1Ur0ZpHXJ7mJ3IHCNeZ69x0yFqCF_q38g
