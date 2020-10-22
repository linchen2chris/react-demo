import { Form, Field, Formik } from 'formik';
import { Input } from 'antd';
import React from "react";

import { formData } from "../01-react-hook-form-antd/mockFormData";
import Editable from './components/Editable';
import OptionsConfig from './components/OptionsConfig';
import Required from './components/Required';
import Viewable from './components/Viewable';

const FormikForm = () => {
  const onSubmit = (values) => {
    console.log(11, values);
  };

  return (
    <div>
      <h1>Friend List</h1>
      <Formik initialValues={formData} onSubmit={onSubmit}>
        {(props) => (
          <Form onSubmit={props.handleSubmit} onChange={props.handleSubmit}>
            <Field as={Input} type="text" name="label" />
            <Required name="validate.required"/>
            <Viewable name="validate.viewable"/>
            <Editable name="validate.editable"/>
            <OptionsConfig name="optionsConfig.options"/>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
