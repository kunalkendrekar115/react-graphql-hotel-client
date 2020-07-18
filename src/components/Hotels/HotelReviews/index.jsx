import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ModalWriteReview from "./ModalWriteReview";
import ReviewLists from "./ReviewLists";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "inherit",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
  },
}));

const HotelReviews = ({ hotel }) => {
  const [isReviewModalOpeded, setReivewModalOpen] = useState(false);

  const handleReviewModalOpen = (isOpen) => {
    setReivewModalOpen(isOpen);
  };

  const classes = useStyles();
  return (
    <div
      style={{
        flex: 5,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        paddingLeft: 20,
        marginTop: 10,
      }}
    >
      <div className={classes.root}>
        <Typography className={classes.title}>Reviews</Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={() => handleReviewModalOpen(true)}
        >
          Write Review
        </Button>
      </div>

      <ReviewLists reviews={hotel.reviews} />
      <ModalWriteReview
        isOpen={isReviewModalOpeded}
        hotelId={hotel._id}
        onCancel={() => setReivewModalOpen(false)}
      />
    </div>
  );
};

export default HotelReviews;
