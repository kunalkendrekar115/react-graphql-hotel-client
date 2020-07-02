import React from "react"

import CustomField from "../../common/CustomField"
import RoomTypes from "./RoomTypes"
import Amenities from "./Amenities"

import { FieldArray } from "formik"
import { fields } from "../helper"

const HotelFormFields = () => {
  return (
    <>
      {fields.map((field, index) => (
        <>
          {field.tariffs === undefined && field.amenities === undefined && (
            <div style={{ width: "inherit", padding: 8 }}>
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
            </div>
          )}
          {field.amenities && (
            <div>
              <FieldArray
                name={field.name}
                render={(arrayHelpers) => (
                  <Amenities
                    arrayHelpers={arrayHelpers}
                    amenities={field.amenities}
                  />
                )}
              />
            </div>
          )}
          {field.tariffs && (
            <div>
              <FieldArray
                name={field.name}
                render={(arrayHelpers) => (
                  <RoomTypes
                    arrayHelpers={arrayHelpers}
                    tariffs={field.tariffs}
                  />
                )}
              />
            </div>
          )}
        </>
      ))}
    </>
  )
}

export default HotelFormFields
