import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: 5,
    height: "fit-content",
    marginTop: 15,
  },
  cardContent: {
    width: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  row: {
    display: "flex",
    marginTop: 8,
    width: "100%",
    justifyContent: "space-between",
  },
  address: {
    fontSize: 16,
    marginTop: 2,
    marginBottom: 2,
  },
  country: {
    fontSize: 14,
    marginBottom: 14,
  },

  key: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
  },
}));

const HotelInfo = ({ hotel }) => {
  const classes = useStyles();

  const {
    hotelName,
    hotelAddress,
    country,
    pincode,
    contactPhone,
    contactEmail,
    amenities,
    tariffs,
  } = hotel;

  const getAmenities = () => {
    if (amenities.length > 0) {
      return amenities.reduce((acc, curr, index) => {
        return `${acc}${
          index !== 0 && index !== amenities.length ? `, ${curr}` : `${curr}`
        }`;
      }, ``);
    }
    return "N.A.";
  };
  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title}>{hotelName}</Typography>

        <Typography className={classes.address}>{hotelAddress}</Typography>

        <Typography
          className={classes.country}
        >{`${country}, ${pincode}`}</Typography>

        <div className={classes.row}>
          <Typography className={classes.key} color="textSecondary">
            Contact Number:
          </Typography>
          <Typography className={classes.value}>{contactPhone}</Typography>
        </div>

        <div className={classes.row}>
          <Typography className={classes.key} color="textSecondary">
            Contact Email:
          </Typography>
          <Typography className={classes.value}>{contactEmail}</Typography>
        </div>

        <div className={classes.row}>
          <Typography className={classes.key} color="textSecondary">
            Amenities:
          </Typography>
          <Typography className={classes.value}>{getAmenities()}</Typography>
        </div>

        <Typography style={{ marginTop: 16, fontWeight: "bold" }}>
          Room Types & Charges:
        </Typography>

        {tariffs.map(({ roomType, rate }) => (
          <div className={classes.row} key={roomType}>
            <Typography className={classes.key} color="textSecondary">
              {roomType}
            </Typography>
            <Typography className={classes.value}>{rate}</Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default HotelInfo;
