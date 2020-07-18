export const validate = (values) => {
  const errors = {};

  if (values.reviewerName === "") errors.reviewerName = "Enter Name";

  return errors;
};

export const fields = [
  {
    name: "reviewerName",
    label: "Your Name",
    type: "text",
  },
  {
    name: "rating",
    label: "Rating",
    type: "rating",
  },
  {
    name: "comments",
    label: "Comments",
    type: "text",
  },
];

const getDefaultValueFromType = (type) => {
  switch (type) {
    case "text":
      return "";
    case "rating":
      return 0;
    default:
      return null;
  }
};

export const getInitialValues = () => {
  let initialValues = {};

  fields.map((field, index) => {
    initialValues[field.name] = getDefaultValueFromType(field.type);
  });

  return initialValues;
};
