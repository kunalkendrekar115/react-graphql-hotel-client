import React from "react"

import { Formik, Form } from "formik"
import { useMutation } from "@apollo/react-hooks"
import WriteReviewFields from "./WriteReviewFields"

import { getInitialValues, validate, fields } from "../helpers"
import { ADD_REVIEW, GET_HOTEL, LIST_HOTELS } from "../../../../queries"
import WriteReviewButtons from "./WriteReviewButtons"

const WriteReviewForm = ({ onCancel, hotelId }) => {
  const [addReview, { loading, error }] = useMutation(ADD_REVIEW, {
    onCompleted: (data) => {
      onCancel()
    },
    onError: (error) => {
      console.log(error)
    },

    update: (proxy, { data: { addReview: updatedHotel } }) => {
      proxy.writeQuery({
        query: GET_HOTEL,
        data: {
          hotel: { ...updatedHotel }
        }
      })
    }
  })

  const handleSubmit = (values) => {
    addReview({
      variables: {
        _id: hotelId,
        review: { ...values, rating: +values.rating }
      },
      refetchQueries: [{ query: LIST_HOTELS }]
    })
  }

  return (
    <Formik
      initialValues={getInitialValues()}
      validateOnChange={false}
      validateOnBlur={false}
      validate={validate}
      onSubmit={handleSubmit}
    >
      <Form style={{ width: "inherit" }}>
        <WriteReviewFields fields={fields} />
        <WriteReviewButtons onCancel={onCancel} loading={loading} />
      </Form>
    </Formik>
  )
}

export default WriteReviewForm
