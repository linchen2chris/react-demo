import * as React from "react";
import { Field, FieldProps, getIn, FieldConfig } from "formik";
import { Form } from "antd";
import { FormItemProps as $FormItemProps } from "antd/lib/form/FormItem";
export const FormItem = ({
  name,
  showValidateSuccess,
  showInitialErrorAfterTouched = false,
  children,
  validate,
  ...restProps
}) => (
  <Field name={name} validate={validate}>
    {({ form: { errors = {}, touched = {}, initialErrors = {} } }) => {
      const error = getIn(errors, name, undefined);
      const initialError = getIn(initialErrors, name, undefined);
      let isTouched = getIn(touched, name, false);
      console.log("Line 18", isTouched);
      if (Array.isArray(isTouched)) {
        isTouched =
          isTouched.length === 0
            ? true
            : isTouched.reduce((acc, value) => acc || value, false);
      }
      console.log("Line 20", isTouched);
      const hasError = error !== undefined && isTouched;
      const hasInitialError = initialError !== undefined;
      const isValid = !error && isTouched;
      const showHelp =
        hasError ||
        (hasInitialError && (!isTouched || showInitialErrorAfterTouched));

      return (
        <Form.Item
          validateStatus={
            hasError || (hasInitialError && !isTouched)
              ? "error"
              : isValid && showValidateSuccess
              ? "success"
              : undefined
          }
          hasFeedback={isValid}
          help={
            showHelp && (
              <>
                {hasError && <li>{error}</li>}
                {hasInitialError &&
                  (!isTouched || showInitialErrorAfterTouched) && (
                    <li>{initialError}</li>
                  )}
              </>
            )
          }
          {...restProps}
        >
          {children}
        </Form.Item>
      );
    }}
  </Field>
);

export default FormItem;
