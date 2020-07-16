import React from "react"
import { Button } from "@material-ui/core"
import { connect } from "formik"

const HotelFormButtons = ({ formik }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: 30,
        marginBottom: 20
      }}
    >
      <Button
        variant="contained"
        color="secondary"
        onClick={() => formik.handleReset()}
      >
        Reset
      </Button>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </div>
  )
}

export default connect(HotelFormButtons)
