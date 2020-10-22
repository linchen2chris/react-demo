import { Button, Checkbox, Input } from "antd";
import React from "react";
import { FieldArray, Field, useField, useFormikContext } from "formik";

const OptionsConfig = ({ name }) => {
  const { values, submitForm, setFieldValue } = useFormikContext();
//  console.log("Line 7", values, values[name]); TODO rerender 4 times
  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => {
        return (
          <>
            {values.optionsConfig.options.map((o, index) => (
              <div style={{ display: "flex" }}>
                {/* <Field name={`[${index}].label`} /> */}
                <Field name={`optionsConfig.options[${index}].checked`}>
                  {({ field, form }) => {
                    return (
                      <Checkbox
                        checked={field.value}
                        onChange={(e) =>
                          form.setFieldValue(
                            `optionsConfig.options[${index}].checked`,
                            e.target.checked
                          )
                        }
                      />
                    );
                  }}
                </Field>

                <Button
                  onClick={() => {
                    arrayHelpers.move(index, 0);
                    submitForm();
                  }}
                >
                  移到首位
                </Button>
                <Button
                  onClick={() => {
                    arrayHelpers.remove(index);
                    submitForm();
                  }}
                >
                  删除
                </Button>
                <Field name={`optionsConfig.options[${index}].value`}>
                  {({ field, form }) => (
                    <Input
                      value={field.value}
                      onChange={(e) => {
                        form.setFieldValue(
                          `optionsConfig.options[${index}].label`,
                          e.target.value
                        );
                        form.setFieldValue(
                          `optionsConfig.options[${index}].value`,
                          e.target.value
                        );
                      }}
                    />
                  )}
                </Field>
              </div>
            ))}
            <Button
              onClick={() => {
                arrayHelpers.push({
                  label: "选项",
                  value: "选项",
                  checked: false,
                });
                submitForm();
              }}
            >
              add
            </Button>
          </>
        );
      }}
    />
  );
};

export default OptionsConfig;
