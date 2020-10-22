import { Checkbox } from "formik-antd";
import { useField, useFormikContext } from "formik";
import React from "react";

const Required = ({ name }) => {
  const { values, submitForm, setFieldValue } = useFormikContext();

  return (
    <Checkbox
      name={name}
      onChange={(e) => {
        setFieldValue("validate.editable", e.target.checked);
      }}
    >
      必填
    </Checkbox>
  );
};

export default Required;
