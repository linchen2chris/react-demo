import { Form, Input } from "formik-antd";
import { Formik, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";

import { formData } from "../01-react-hook-form-antd/mockFormData";
import Editable from "./components/Editable";
import OptionsConfig from "./components/OptionsConfig";
import Required from "./components/Required";
import Viewable from "./components/Viewable";

const schema = Yup.object().shape({
  label: Yup.string().required(),
});

const FormikForm = () => {
  const onSubmit = (values) => {
    console.log(11, values);
  };

  return (
    <div>
      <h1>Friend List</h1>
      <Formik
        initialValues={formData}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit} onChange={props.handleSubmit}>
            <Form.Item name="label">
              <Input type="text" name="label" />
            </Form.Item>
            <Required name="validate.required" />
            <Viewable name="validate.viewable" />
            <Editable name="validate.editable" />
            <OptionsConfig name="optionsConfig.options" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
