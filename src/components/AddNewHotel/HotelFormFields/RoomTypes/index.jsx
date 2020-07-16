import React from "react"
import FormControlLabel from "@material-ui/core/FormControlLabel"

import Grid from "@material-ui/core/Grid"

import CustomField from "../../../common/CustomField"

const RoomTypes = ({ tariffs, arrayHelpers }) => {
  const isSelected = (index) => {
    const {
      form: {
        values: { tariffs: addedTypes }
      }
    } = arrayHelpers

    return addedTypes[index].isSelected
  }

  const { tariffsError } = arrayHelpers.form.errors

  return (
    <div>
      <h4> Select Room types and enter rates </h4>
      {tariffsError && <span style={{ color: "red" }}>{tariffsError}</span>}
      <Grid container spacing={3}>
        {tariffs.map(({ roomType, rate }, index) => (
          <Grid item xs={6}>
            <div
              style={{
                display: "flex",
                marginRight: 10,
                marginLeft: 10,
                alignItems: "start",
                justifyContent: "space-between"
              }}
            >
              <FormControlLabel
                control={
                  <CustomField
                    type="checkbox"
                    name={`tariffs[${index}].isSelected`}
                    key={roomType}
                  />
                }
                label={roomType}
              />

              <CustomField
                disabled={!isSelected(index)}
                name={`tariffs[${index}].rate`}
                type="number"
                size="small"
                style={{ width: 90 }}
                variant="outlined"
                id={roomType}
                label={"Rate"}
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default RoomTypes
