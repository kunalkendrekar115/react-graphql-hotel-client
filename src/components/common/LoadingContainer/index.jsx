import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%"
  }
}))

const LoadingContainer = ({ isLoading, errorMessage, children }) => {
  const classes = useStyles()

  return (
    <>
      {isLoading && (
        <div className={classes.root}>
          <CircularProgress />
        </div>
      )}
      {errorMessage && <h3>{errorMessage}</h3>}
      {!errorMessage && !isLoading && children}
    </>
  )
}

export default LoadingContainer
