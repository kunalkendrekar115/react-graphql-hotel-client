import React from "react"
import InputLabel from "@material-ui/core/InputLabel"
import { makeStyles } from "@material-ui/core/styles"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    maxWidth: 400
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

const HotelsList = ({ hotels, onHotelSelect }) => {
  const classes = useStyles()

  return (
    <>
      {hotels.length > 0 ? (
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="select-outlined-label">Hotels </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            onChange={onHotelSelect}
            label="Hotels"
          >
            {hotels.map((hotel) => (
              <MenuItem value={hotel._id}>
                <em>{hotel.hotelName}</em>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <h4>No Hotels Found</h4>
      )}
    </>
  )
}

export default HotelsList
