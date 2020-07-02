import React from "react"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { makeStyles } from "@material-ui/core/styles"

import CustomField from "../../../../common/CustomField"

const useStyles = makeStyles({
  label: {
    marginRight: 14
  }
})

const WriteReviewFields = ({ fields }) => {
  const classes = useStyles()

  return (
    <>
      {fields.map((field, index) => (
        <div style={{ marginTop: 20, width: "inherit" }}>
          {(index === 0 || index === 2) && (
            <CustomField
              key={field.name}
              fullWidth
              rows={index === 0 ? 1 : 4}
              multiline={index === 2}
              variant="outlined"
              defaultValue={`Enter ${field.label}`}
              name={field.name}
              type={field.type}
              id={field.name}
              label={field.label}
            />
          )}
          {index === 1 && (
            <FormControlLabel
              labelPlacement="start"
              classes={classes}
              control={
                <CustomField
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  id={field.name}
                />
              }
              label={field.label}
            />
          )}
        </div>
      ))}
    </>
  )
}

export default WriteReviewFields
