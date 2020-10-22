import { Checkbox } from "antd";
import { useField, useFormikContext } from 'formik';
import React from "react";

const Required = ({ name }) => {
  const [field, fieldMeta, fieldHelper] = useField(name);
  const { values, submitForm, setFieldValue } = useFormikContext();

  return (
    <Checkbox
      checked={field.value}
      onChange={(e) => {
        fieldHelper.setValue(e.target.checked);
        setFieldValue("validate.editable", e.target.checked);
      }}
    >
      必填
    </Checkbox>
  );
};

export default Required;
