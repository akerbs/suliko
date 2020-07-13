import React, { useState } from "react"
import "./layout.css"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import Modal from "@material-ui/core/Modal"
import Timeline from "@material-ui/lab/Timeline"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"
import PeopleIcon from "@material-ui/icons/People"
import EventIcon from "@material-ui/icons/Event"
import PhoneIcon from "@material-ui/icons/Phone"
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail"
import PersonIcon from "@material-ui/icons/Person"
import ScheduleIcon from "@material-ui/icons/Schedule"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import TextField from "@material-ui/core/TextField"
// import Checkbox from "@material-ui/core/Checkbox"

const useStyles = makeStyles(theme => ({
  modalWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: 320,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid rgba(133,26,29)",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 1, 0),
    outline: 0,
  },
  timeline: {
    margin: 0,
    padding: 0,
  },
  timelineItem: {
    margin: 0,
    padding: 0,
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 185,
  },
}))

const ModalWindow = props => {
  const classes = useStyles()

  const [form, setForm] = useState({
    peopleCount: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
  })

  const [selectedDate, handleDateChange] = React.useState(new Date())

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  // const [checked, setChecked] = React.useState(true)
  // const handleCheckbox = event => {
  //   setChecked(event.target.checked)
  // }

  return (
    <Modal
      className={classes.modalWrapper}
      onClose={props.onClose}
      open={props.open}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <form method="post" action="http://localhost:3000/reservation">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Timeline className={classes.timeline}>
              <TimelineItem
                className={classes.timelineItem}
                // style={{ marginBottom: 5 }}
              >
                <TimelineOppositeContent
                  style={{ flex: 0 }}
                ></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <PeopleIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">
                      People
                    </InputLabel>
                    <Select
                      name="peopleCount"
                      id="peopleCount"
                      labelId="demo-simple-select-label"
                      value={form.peopleCount}
                      onChange={changeHandler}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                      <MenuItem value={7}>7</MenuItem>
                      <MenuItem value={8}>8</MenuItem>
                      <MenuItem value={9}>9</MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={11}>11-15</MenuItem>
                      <MenuItem value={16}>16-20</MenuItem>
                      <MenuItem value={20}>20+</MenuItem>
                    </Select>
                  </FormControl>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem className={classes.timelineItem}>
                <TimelineOppositeContent
                  style={{ flex: 0 }}
                ></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <EventIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <FormControl className={classes.formControl}>
                    <DatePicker
                      name="date"
                      id="date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      style={{ marginTop: 15 }}
                      autoOk={true}
                      disablePast={true}
                    />
                  </FormControl>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem className={classes.timelineItem}>
                <TimelineOppositeContent
                  style={{ flex: 0 }}
                ></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <ScheduleIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <FormControl className={classes.formControl}>
                    <TimePicker
                      name="time"
                      id="time"
                      value={selectedDate}
                      onChange={handleDateChange}
                      ampm={false}
                      style={{ marginTop: 15 }}
                      autoOk={true}
                    />
                  </FormControl>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem className={classes.timelineItem}>
                <TimelineOppositeContent
                  style={{ flex: 0 }}
                ></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <PersonIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <FormControl className={classes.formControl}>
                    <TextField
                      value={form.name}
                      name="name"
                      id="name"
                      label="Name"
                      onChange={changeHandler}
                    />
                  </FormControl>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem className={classes.timelineItem}>
                <TimelineOppositeContent
                  style={{ flex: 0 }}
                ></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <PhoneIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <FormControl className={classes.formControl}>
                    <TextField
                      value={form.phone}
                      name="phone"
                      id="phone"
                      label="Phone"
                      onChange={changeHandler}
                    />
                  </FormControl>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem className={classes.timelineItem}>
                <TimelineOppositeContent
                  style={{ flex: 0 }}
                ></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <AlternateEmailIcon />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <FormControl className={classes.formControl}>
                    <TextField
                      value={form.email}
                      name="email"
                      id="email"
                      label="Email"
                      onChange={changeHandler}
                    />
                  </FormControl>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </MuiPickersUtilsProvider>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{
              position: "relative",
              left: "50%",
              transform: "translate(-50%, 0)",
            }}
          >
            Reservieren jetzt
          </Button>

          {/* <Checkbox checked={checked} onChange={handleCheckbox} color="primary" />
<Typography
variant="caption"
// align="center"
style={{
  color: "rgba(133, 26, 29)",
  display: "inline",
  lineHight: 0,
}}
>
Argee to receive news and offers from Suliko
</Typography> */}
        </form>
      </div>
    </Modal>
  )
}

export default ModalWindow
