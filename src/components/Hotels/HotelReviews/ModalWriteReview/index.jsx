import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"

import WriteReviewForm from "../WriteReviewForm"

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}))

const ModalWriteReview = ({ isOpen, onCancel, hotelId }) => {
  const classes = useStyles()

  return (
    <div>
      <Modal
        open={isOpen}
        onBackdropClick={onCancel}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <WriteReviewForm onCancel={onCancel} hotelId={hotelId} />
        </div>
      </Modal>
    </div>
  )
}

export default ModalWriteReview
