export const validate = (values) => {
  const tariffs = values.tariffs.map((tariff) => ({ ...tariff, value: "" }));
  const errors = { tariffs };

  if (values.hotelName === "") errors.hotelName = "Enter Hotel name";
  if (values.hotelAddress === "") errors.hotelAddress = "Enter Hotel address";
  if (values.pincode === null) errors.pincode = "Enter Pincode";
  if (values.country === "") errors.country = "Enter Country";
  if (values.contactPhone === null) errors.contactPhone = "Enter Contact Phone";
  if (values.contactEmail === "") errors.contactEmail = "Enter Contact Email";

  const isRoomTypeSelected =
    values.tariffs.findIndex(({ isSelected }) => isSelected === true) !== -1;

  if (!isRoomTypeSelected)
    errors.tariffsError = "Please select atleast 1 room type";

  values.tariffs.map(({ rate, isSelected }, index) => {
    if (isSelected && rate === "") errors.tariffs[index].rate = "Enter Rate";
  });

  const isTariffError =
    errors.tariffs.findIndex((tariff) => tariff.rate === "Enter Rate") !== -1;

  if (!isTariffError) delete errors.tariffs;

  console.log(errors);
  return errors;
};

export const fields = [
  {
    name: "hotelName",
    label: "Hotel Name",
    type: "text",
  },
  {
    name: "hotelAddress",
    label: "Full Address",
    type: "text",
  },
  {
    name: "pincode",
    label: "Pincode",
    type: "number",
  },
  {
    name: "country",
    label: "Country",
    type: "text",
  },

  {
    name: "contactPhone",
    label: "Contact Number",
    type: "number",
  },

  {
    name: "contactEmail",
    label: "Contact Email",
    type: "text",
  },
  {
    name: "amenities",
    type: "array",
    amenities: [
      {
        name: "hasWifi",
        label: "Wifi",
        type: "boolean",
      },
      {
        name: "hasRoomService",
        label: "Room Service",
        type: "boolean",
      },
      {
        name: "hasLaundry",
        label: "Laundry",
        type: "boolean",
      },
      {
        name: "hasLocker",
        label: "Locker",
        type: "boolean",
      },
    ],
  },

  {
    name: "tariffs",
    type: "array",
    tariffs: [
      { roomType: "Single", rate: "" },
      { roomType: "Double", rate: "" },
      { roomType: "Executive", rate: "" },
      { roomType: "Delux", rate: "" },
    ],
  },
];

const getDefaultValueFromType = (type) => {
  switch (type) {
    case "text":
      return "";
    case "array":
      return [];
    case "boolean":
      return false;
    default:
      return null;
  }
};

export const getInitialValues = () => {
  let initialValues = {};

  fields.map((field, index) => {
    initialValues[field.name] = getDefaultValueFromType(field.type);
    if (field.tariffs) initialValues[field.name] = field.tariffs;
  });

  return initialValues;
};
