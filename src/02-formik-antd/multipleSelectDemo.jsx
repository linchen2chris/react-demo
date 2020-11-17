import { Select, Input } from "formik-antd";
import { Formik, Form, useField } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { FormItem } from "./FormItem";

const schema = Yup.object().shape({
  test: Yup.array().required("必填"),
  tdd: Yup.array().required("必填"),
});
const CheckboxExample = () => (
  <div>
    <h1>Checkboxes</h1>
    <p>
      This example demonstrates how to properly create checkboxes with Formik.
    </p>
    <Formik
      initialValues={{
        test: [],
        tdd: [],
      }}
      initialTouched={{ test: [true], tdd: [true] }}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log("Line 24", values);
      }}
    >
      {({
        isSubmitting,
        getFieldProps,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
      }) => {
        console.log("Line 36", values, errors, touched);
        return (
          <Form>
            <FormItem name="test">
              <Select name="test" data-testid="input" mode="multiple">
                <Select.Option value={1}>1</Select.Option>
                <Select.Option value={2}>2</Select.Option>
                <Select.Option value={2}>3</Select.Option>
              </Select>
            </FormItem>
            <FormItem name="tdd">
              <Input name="tdd[0]" />
              <Input name="tdd[1]" />
              <Input name="tdd[2]" />
            </FormItem>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  </div>
);

export default CheckboxExample;
