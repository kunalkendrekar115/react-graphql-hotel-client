import React from "react"
import { useQuery, useLazyQuery } from "@apollo/react-hooks"

import { LIST_HOTELS, GET_HOTEL } from "../../queries"
import HotelsList from "./HotelsList"

import LoadingContainer from "../common/LoadingContainer"

import HotelInfo from "./HotelInfo"
import HotelReviews from "./HotelReviews"

const Hotels = () => {
  const {
    data: hotelsList,
    loading: loadingHotels,
    error: hotelListLoadError
  } = useQuery(LIST_HOTELS)

  const [
    getHotel,
    { loading: loadingHotelInfo, data: hotelData, error: hotelLoadError }
  ] = useLazyQuery(GET_HOTEL)

  const handleHotelSelect = ({ target: { value: id } }) => {
    id && getHotel({ variables: { id } })
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        height: "100%",
        boxSizing: "border-box",
        flexDirection: "column",
        padding: 20
      }}
    >
      {loadingHotels && <h4>Loading Hotels ...</h4>}
      {hotelListLoadError && <h4>{JSON.stringify(hotelListLoadError)}</h4>}

      {hotelsList && (
        <HotelsList
          hotels={hotelsList.hotels}
          onHotelSelect={handleHotelSelect}
        />
      )}

      <LoadingContainer
        isLoading={loadingHotelInfo}
        errorMessage={JSON.stringify(hotelLoadError)}
      >
        {hotelData && (
          <div
            style={{
              display: "flex",
              width: "inherit",
              padding: 15,
              flex: 1,
              boxSizing: "border-box"
            }}
          >
            <HotelInfo hotel={hotelData.hotel} />
            <HotelReviews hotel={hotelData.hotel} />
          </div>
        )}
      </LoadingContainer>
    </div>
  )
}

export default Hotels
