import React from "react"
import { Button } from "@material-ui/core"
import { connect } from "formik"

const HotelFormButtons = ({ formik }) => {
  return (
    <div
      style={{
        width: "inherit",
        display: "flex",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 20
      }}
    >
      <Button
        style={{ marginRight: 30 }}
        variant="contained"
        color="secondary"
        onClick={() => formik.handleReset()}
      >
        Reset
      </Button>
      <Button
        style={{ marginLeft: 30 }}
        type="submit"
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </div>
  )
}

export default connect(HotelFormButtons)
