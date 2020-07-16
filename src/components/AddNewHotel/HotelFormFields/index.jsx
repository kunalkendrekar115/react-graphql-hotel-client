import React from "react"

import CustomField from "../../common/CustomField"
import RoomTypes from "./RoomTypes"
import Amenities from "./Amenities"
import Grid from "@material-ui/core/Grid"
import { FieldArray } from "formik"
import { fields } from "../helper"

const HotelFormFields = () => {
  return (
    <Grid container spacing={3} style={{ marginTop: 10 }}>
      {fields.map((field) => (
        <>
          {field.tariffs === undefined && field.amenities === undefined && (
            <Grid item xs={6}>
              <CustomField
                key={field.name}
                fullWidth
                variant="outlined"
                defaultValue={`Enter ${field.label}`}
                name={field.name}
                type={field.type}
                id={field.name}
                label={field.label}
              />
            </Grid>
          )}
          {field.amenities && (
            <Grid item xs={12}>
              <FieldArray
                name={field.name}
                render={(arrayHelpers) => (
                  <Amenities
                    arrayHelpers={arrayHelpers}
                    amenities={field.amenities}
                  />
                )}
              />
            </Grid>
          )}
          {field.tariffs && (
            <Grid item xs={12}>
              <FieldArray
                name={field.name}
                render={(arrayHelpers) => (
                  <RoomTypes
                    arrayHelpers={arrayHelpers}
                    tariffs={field.tariffs}
                  />
                )}
              />
            </Grid>
          )}
        </>
      ))}
    </Grid>
  )
}

export default HotelFormFields
