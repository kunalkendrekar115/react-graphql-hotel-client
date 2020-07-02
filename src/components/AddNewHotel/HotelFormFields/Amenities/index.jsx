import React from "react"
import FormControlLabel from "@material-ui/core/FormControlLabel"

import CustomField from "../../../common/CustomField"

const Amenities = ({ arrayHelpers, amenities }) => {
  const handleChange = (checked, index) => {
    if (checked) {
      arrayHelpers.push(amenities[index].label)
    } else {
      const {
        form: {
          values: { amenities: addedAmenities }
        }
      } = arrayHelpers

      const addedIndex = addedAmenities.findIndex(
        (amenity) => amenity === amenities[index].label
      )
      arrayHelpers.remove(addedIndex)
    }
  }
  return (
    <div>
      <h5>Select Amenities</h5>
      <div
        style={{
          display: "flex",
          width: "inherit",
          justifyContent: "space-between"
        }}
      >
        {amenities.map((amenity, index) => (
          <FormControlLabel
            control={
              <CustomField
                type="checkbox"
                name={amenity.name}
                key={amenity.name}
                onChange={({ target: { checked } }) =>
                  handleChange(checked, index)
                }
              />
            }
            label={amenity.label}
          />
        ))}
      </div>
    </div>
  )
}

export default Amenities
