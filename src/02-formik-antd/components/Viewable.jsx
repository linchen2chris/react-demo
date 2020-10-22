import { Checkbox } from "antd";
import React from "react";
import { useField } from "formik";

const Viewable = ({ name }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <Checkbox
      checked={!field.value}
      onChange={(e) => helpers.setValue(!e.target.checked)}
    >
      隐藏
    </Checkbox>
  );
};

export default Viewable;
