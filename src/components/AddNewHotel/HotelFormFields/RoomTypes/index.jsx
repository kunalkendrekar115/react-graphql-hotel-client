import React from "react"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { makeStyles } from "@material-ui/core/styles"

import CustomField from "../../../common/CustomField"

const useStyles = makeStyles((theme) => ({
  root: {
    MuiTextField: {
      margin: theme.spacing(1),
      width: "50px",
      height: "25px"
    }
  }
}))

const RoomTypes = ({ tariffs, arrayHelpers }) => {
  const classes = useStyles()

  const isSelected = (index) => {
    const {
      form: {
        values: { tariffs: addedTypes }
      }
    } = arrayHelpers

    return (
      addedTypes.findIndex(
        ({ roomType }) => roomType === tariffs[index].roomType
      ) !== -1
    )
  }

  const handleChange = (checked, index) => {
    if (checked) {
      arrayHelpers.push({
        roomType: tariffs[index].roomType,
        rate: ""
      })
    } else {
      const {
        form: {
          values: { tariffs: addedTypes }
        }
      } = arrayHelpers

      const addedIndex = addedTypes.findIndex(
        ({ roomType }) => roomType === tariffs[index]
      )
      arrayHelpers.remove(addedIndex)
    }
  }
  return (
    <div>
      <h5> Select Room types and enter rates </h5>
      {tariffs.map(({ roomType }, index) => (
        <div
          style={{
            display: "flex",
            width: 200,
            padding: 10,
            justifyContent: "space-between"
          }}
        >
          <FormControlLabel
            control={
              <CustomField
                type="checkbox"
                name={roomType}
                key={roomType}
                onChange={({ target: { checked } }) =>
                  handleChange(checked, index)
                }
              />
            }
            label={roomType}
          />

          <CustomField
            disabled={!isSelected(index)}
            name={`tariffs[${index}].rate`}
            type="number"
            size="small"
            style={{ width: 100 }}
            variant="outlined"
            id={roomType}
            label={"Rate"}
          />
        </div>
      ))}
    </div>
  )
}

export default RoomTypes
