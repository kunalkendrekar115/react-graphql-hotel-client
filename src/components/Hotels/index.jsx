import React from "react";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";

import { LIST_HOTELS, GET_HOTEL_INFO_BY_ID } from "../../queries";
import HotelsList from "./HotelsList";

import LoadingContainer from "../common/LoadingContainer";

import HotelInfo from "./HotelInfo";
import HotelReviews from "./HotelReviews";

const Hotels = () => {
  const {
    data: hotelsList,
    loading: loadingHotels,
    error: hotelListLoadError,
  } = useQuery(LIST_HOTELS);

  const [
    getHotelInfo,
    { loading: loadingHotelInfo, data: hotelData, error: hotelLoadError },
  ] = useLazyQuery(GET_HOTEL_INFO_BY_ID);

  const handleHotelSelect = ({ target: { value: id } }) => {
    id && getHotelInfo({ variables: { id } });
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        boxSizing: "border-box",
        flexDirection: "column",
        padding: 20,
      }}
    >
      {loadingHotels && <h4>Loading Hotels ...</h4>}
      {hotelListLoadError && <h4>{hotelListLoadError.message}</h4>}

      {hotelsList && (
        <HotelsList
          hotels={hotelsList.hotels}
          onHotelSelect={handleHotelSelect}
        />
      )}

      <LoadingContainer
        isLoading={loadingHotelInfo}
        errorMessage={hotelLoadError ? hotelLoadError.message : ""}
      >
        {hotelData && (
          <div
            style={{
              display: "flex",
              width: "inherit",
            }}
          >
            <HotelInfo hotel={hotelData.hotel} />
            <HotelReviews hotel={hotelData.hotel} />
          </div>
        )}
      </LoadingContainer>
    </div>
  );
};

export default Hotels;
