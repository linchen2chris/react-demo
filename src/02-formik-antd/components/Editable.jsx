import { Checkbox } from "antd";
import { useField, useFormikContext } from 'formik';
import React from "react";

const Editable = ({ name }) => {
  const [field, fieldMeta, fieldHelper] = useField(name);
  const { values, submitForm, setFieldValue } = useFormikContext();

  return (
    <Checkbox
      checked={!field.value}
      onChange={(e) => {
        fieldHelper.setValue(!e.target.checked);
        setFieldValue("validate.required", !e.target.checked);
      }}
    >
      只读
    </Checkbox>
  );
};

export default Editable;
