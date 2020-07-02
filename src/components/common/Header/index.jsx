import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import IconButton from "@material-ui/core/IconButton"

import { useLocation, useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}))

const Header = () => {
  const { pathname } = useLocation()
  const history = useHistory()

  const classes = useStyles()

  const isAddHotelPath = () => pathname.includes("add-hotel")

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        {isAddHotelPath() ? (
          <>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => history.goBack()}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Add Hotel
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h6" className={classes.title}>
              Hotels
            </Typography>
            <Button
              color="inherit"
              onClick={() => history.push("/hotels/add-hotel")}
            >
              Add New Hotel
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
