import { Button } from "antd";
import React from "react";
import { FieldArray, Field, useField, useFormikContext } from "formik";
import { Checkbox, Input } from "formik-antd";

const OptionsConfig = ({ name }) => {
  const { values, submitForm, setFieldValue } = useFormikContext();
   console.log("Line 7", values, values[name]); //TODO rerender 4 times
  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => {
        return (
          <>
            {values.optionsConfig.options.map((o, index) => (
              <div style={{ display: "flex" }}>
                {/* <Field name={`[${index}].label`} /> */}
                <Checkbox name={`optionsConfig.options[${index}].checked`} />

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
                <Input
                  name={`optionsConfig.options[${index}].value`}
                  onChange={(e) => {
                    setFieldValue(
                      `optionsConfig.options[${index}].label`,
                      e.target.value
                    );
                  }}
                />
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
