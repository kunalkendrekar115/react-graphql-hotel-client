import gql from "graphql-tag"

export const ADD_HOTEL = gql`
  mutation CreateHotel($hotel: HotelInput) {
    createHotel(hotel: $hotel) {
      _id
    }
  }
`

export const HOTEL_FRAGMENT = gql`
  fragment HotelFragment on Hotel {
    _id
    hotelName
    hotelAddress
    rating
    amenities
    contactPhone
    contactEmail
    country
    pincode
    tariffs {
      roomType
      rate
    }
    reviews {
      _id
      reviewerName
      rating
      comments
    }
  }
`

export const ADD_REVIEW = gql`
  mutation AddReview($_id: String, $review: ReviewInput) {
    addReview(_id: $_id, review: $review) {
      ...HotelFragment
    }
  }
  ${HOTEL_FRAGMENT}
`

export const GET_HOTEL_INFO_BY_ID = gql`
  query GetHotel($id: String) {
    hotel(_id: $id) {
      ...HotelFragment
    }
  }
  ${HOTEL_FRAGMENT}
`

export const LIST_HOTELS = gql`
  {
    hotels {
      _id
      hotelName
    }
  }
`
