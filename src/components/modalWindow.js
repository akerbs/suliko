import React, { useState } from "react"
import "./layout.css"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from "@material-ui/pickers"
import "date-fns"
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
import bgPatternImg from "../images/bgPatternImg.png"
import { useForm, Controller } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers"
import axios from "axios"
import { useHttp } from "./http.hook"
import { navigate } from "gatsby"

const useStyles = makeStyles(theme => ({
  modalWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    overflowX: "hidden",
    [theme.breakpoints.down("xs")]: {
      overflowY: "scroll",
    },

    maxHeight: " 100vh",
    width: 320,
    backgroundImage: `url(${bgPatternImg}) `,

    // backgroundColor: theme.palette.background.paper,
    border: "2px solid rgba(133,26,29)",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 0, 1, 0),
    zIndex: 9999,
    position: "fixed",
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

const schema = yup.object().shape({
  peopleCount: yup.string().nullable().required("Field is required"),
  date: yup.string().nullable().required("Field is required"),
  time: yup.string().nullable().required("Field is required"),
  name: yup
    .string()
    .required("Field is required")
    .min(3, "must be at-least 3 characters")
    .max(20, "Name must be 20 characters or less"),
  phone: yup
    .string()
    .required("Field is required")
    .matches(/^[0-9\-\+]{9,15}$/, "incorrect phone number"),
  email: yup
    .string()
    .required("Field is required")
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "incorrect email"
    ),
  // .email('Please check your email')
})

const defaultValues = {
  peopleCount: null,
  date: null, // Don't use empty strings ""
  time: null,
}

const ModalWindow = props => {
  const classes = useStyles()
  const { loading, request, error } = useHttp
  const {
    register,
    handleSubmit,
    control,
    errors,
    getValues,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  })
  // const [selectedDate, handleDateChange] = React.useState(new Date())

  const errorPeopleCount =
    errors.hasOwnProperty("peopleCount") && errors["peopleCount"].message
  const errorDate = errors.hasOwnProperty("date") && errors["date"].message
  const errorTime = errors.hasOwnProperty("time") && errors["time"].message
  const errorName = errors.hasOwnProperty("name") && errors["name"].message
  const errorPhone = errors.hasOwnProperty("phone") && errors["phone"].message
  const errorEmail = errors.hasOwnProperty("email") && errors["email"].message

  async function onSubmit(data) {
    try {
      let response = await fetch(
        "https://suliko-mailer.herokuapp.com/reservation",
        // "http://localhost:3000/reservation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify(data),
        }
      )
      if (response.ok) {
        navigate("/")
        // window.location.reload()
        let responseJson = await response.json()
        return responseJson
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Modal
      className={classes.modalWrapper}
      onClose={props.onClose}
      open={props.open}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <form
          // name="myForm"
          // method="post"
          // action="http://localhost:3000/reservation"
          // action="https://suliko-mailer.herokuapp.com/reservation"
          // onSubmit={handleSubmit(data => alert(JSON.stringify(data)))}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Timeline className={classes.timeline}>
              <TimelineItem className={classes.timelineItem}>
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

                    <Controller
                      as={
                        <Select>
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
                      }
                      name="peopleCount"
                      rules={{ required: "this is required" }}
                      control={control}
                      defaultValue=""
                      error={!!errorPeopleCount}
                      helperText={errorPeopleCount}
                      // inputRef={register({
                      //   required: true,
                      // })}
                    />

                    {/* {errors.peopleCount && "this is required"} */}
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
                    <Controller
                      as={
                        <DatePicker
                          disableToolbar
                          disablePast
                          autoOk
                          style={{ marginTop: 15 }}
                          variant="inline"
                          format="dd/MM/yyyy"
                          error={!!errorDate}
                          helperText={errorDate}
                        />
                      }
                      control={control}
                      name="date"
                      placeholder="Date"
                    />

                    {/* <DatePicker
                    
                      value={selectedDate}
                      onChange={handleDateChange}
  
                    /> */}
                    {/* <DatePicker
                      id="eventDate"
                      name="eventDate"
                      label="Event date"
                      format="dd.MM.yyyy"
                      disablePast
                      margin="normal"
                      disableToolbar
                      fullWidth
                      value={values.eventDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                      error={errors.hasOwnProperty("eventDate")}
                      helperText={errors.eventDate && errors.eventDate.message}
                    /> */}
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
                    <Controller
                      as={
                        <TimePicker
                          // fullWidth
                          autoOk
                          ampm={false}
                          style={{ marginTop: 15 }}
                          // inputVariant="outlined"
                          variant="inline"
                          ampm={false}
                          // format="hh:mm"
                          error={!!errorTime}
                          helperText={errorTime}
                        />
                      }
                      control={control}
                      name="time"
                      placeholder="Time"
                    />
                    {/* <TimePicker
                      name="time"
                      id="time"
                      value={selectedDate}
                      onChange={handleDateChange}
                      ampm={false}
                      style={{ marginTop: 15 }}
                      autoOk={true}
                    /> */}
                    {/* <TimePicker
                      id="startTime"
                      name="startTime"
                      label="Starts at"
                      margin="normal"
                      ampm={false}
                      fullWidth
                      value={values.startTime}
                      onChange={handleStartTime}
                      KeyboardButtonProps={{
                        "aria-label": "change start time",
                      }}
                      error={errors.hasOwnProperty("startTime")}
                      helperText={errors.startTime && errors.startTime.message}
                    /> */}
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
                      type="text"
                      name="name"
                      id="name"
                      label="Name"
                      inputRef={register}
                      error={!!errorName}
                      helperText={errorName}
                    />
                    {/* {errors.fullname && "fullname is required"} */}
                    {/* {errors.fullname &&
                      errors.fullname.type === "required" &&
                      "this is required"}
                    {errors.fullname &&
                      errors.fullname.type === "minLength" &&
                      "Enter a correct name"}
                    {errors.fullname &&
                      errors.fullname.type === "maxLength" &&
                      "Enter a correct name"} */}
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
                      type="text"
                      name="phone"
                      id="phone"
                      label="Phone"
                      inputRef={register}
                      error={!!errorPhone}
                      helperText={errorPhone}
                    />
                    {/* {errors.phone &&
                      errors.phone.type === "required" &&
                      "this is required"}
                    {errors.phone &&
                      errors.phone.type === "pattern" &&
                      "Enter a correct phone number"} */}
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
                      type="email"
                      name="email"
                      label="Email"
                      inputRef={register}
                      error={!!errorEmail}
                      helperText={errorEmail}
                    />
                    {/* {errors.email &&
                      errors.email.type === "required" &&
                      "this is required"}
                    {errors.email &&
                      errors.email.type === "pattern" &&
                      "Enter a correct phone number"} */}
                  </FormControl>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </MuiPickersUtilsProvider>

          <Button
            // onClick={submitHandler}
            id="submit"
            name="submit"
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
        </form>
      </div>
    </Modal>
  )
}
export default ModalWindow
