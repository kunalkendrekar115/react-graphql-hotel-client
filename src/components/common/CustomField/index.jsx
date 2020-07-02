import React from "react"
import { useField } from "formik"
import TextField from "@material-ui/core/TextField"
import Rating from "@material-ui/lab/Rating"
import { Checkbox } from "@material-ui/core"

const CustomField = ({ type, ...restProps }) => {
  const [field, meta] = useField(restProps)

  const isError = () => {
    return !meta.value && meta.touched && meta.error !== undefined
  }
  return (
    <>
      {(type === "text" || type === "number") && (
        <TextField
          {...field}
          {...restProps}
          type={type}
          error={isError()}
          helperText={isError() ? meta.error : ""}
        />
      )}
      {type === "checkbox" && <Checkbox {...field} {...restProps}></Checkbox>}
      {type === "rating" && <Rating {...field} {...restProps}></Rating>}
    </>
  )
}

export default CustomField
