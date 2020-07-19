import React from "react"
import Card from "@material-ui/core/Card"
import Rating from "@material-ui/lab/Rating"

import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: 12,
    width: "100%",
    boxSizing: "border-box",
    padding: 10
  },

  title: {
    fontSize: 16,
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },
  comments: {
    marginTop: 4,
    fontSize: 12
  }
}))

const ReviewLists = ({ reviews }) => {
  const classes = useStyles()
  return (
    <div
      style={{
        boxSizing: "border-box",
        overflowY: "auto",
        width: "100%",
        marginTop: 10,
        paddingRight: 8,
        height: 340
      }}
    >
      {reviews.map((review) => (
        <Card className={classes.card}>
          <div className={classes.title}>
            <Typography>{review.reviewerName}</Typography>
            <Rating readOnly value={review.rating ? review.rating : 0} />
          </div>
          <Typography className={classes.comments}>
            {review.comments}
          </Typography>
        </Card>
      ))}
    </div>
  )
}

export default ReviewLists
