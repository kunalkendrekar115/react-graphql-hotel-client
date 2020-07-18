import React from "react";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";

import HotelFormFields from "./HotelFormFields";
import HotelFormButtons from "./HotelFormButtons";
import { getInitialValues, validate } from "./helper";

import { useMutation } from "@apollo/react-hooks";
import { ADD_HOTEL, LIST_HOTELS } from "../../queries";
import LoadingContainer from "../common/LoadingContainer";

const AddNewHotel = () => {
  const history = useHistory();

  const [addHotel, { loading, error }] = useMutation(ADD_HOTEL, {
    errorPolicy: "all",
    refetchQueries: [{ query: LIST_HOTELS }],
    onCompleted: (data) => {
      history.goBack();
    },
    onError: (error) => {},
  });

  const handleSubmit = (values) => {
    let filterSelectedTariffs = values.tariffs.reduce((acc, tariff) => {
      if (tariff.isSelected)
        return [...acc, { roomType: tariff.roomType, rate: tariff.rate }];
      return acc;
    }, []);

    addHotel({
      variables: { hotel: { ...values, tariffs: filterSelectedTariffs } },
    });
  };
  return (
    <LoadingContainer
      isLoading={loading}
      errorMessage={error ? error.message : ""}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          marginTop: 10,
          justifyContent: "center",
        }}
      >
        <Formik
          initialValues={getInitialValues()}
          validateOnChange={false}
          validateOnBlur={false}
          validate={validate}
          onSubmit={handleSubmit}
        >
          <Form style={{ width: 500 }}>
            <HotelFormFields />
            <HotelFormButtons />
          </Form>
        </Formik>
      </div>
    </LoadingContainer>
  );
};

export default AddNewHotel;
