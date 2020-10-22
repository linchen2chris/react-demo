import { Button, Checkbox, Input } from "antd";
import { Field, FieldArray, Formik } from "formik";
import React from "react";

import { formData } from "../01-react-hook-form-antd/mockFormData";

const FormikForm = () => {
  const onSubmit = (values) => {
    console.log(11, values);
  };

  return (
    <div>
      <h1>Friend List</h1>
      <Formik initialValues={formData} onSubmit={onSubmit}>
        {(props) => (
          <form onSubmit={props.handleSubmit} onChange={props.handleSubmit}>
            <Field as={Input} type="text" name="label" />
            <Field name="validate.required" type="checkbox">
              {({ field, form }) => (
                <Checkbox
                  checked={field.value}
                  onChange={(e) => {
                    form.setFieldValue("validate.required", e.target.checked);
                    form.setFieldValue("validate.editable", e.target.checked);
                  }}
                >
                  必填
                </Checkbox>
              )}
            </Field>
            <Field name="validate.viewable">
              {({ field, form }) => (
                <Checkbox
                  checked={!field.value}
                  onChange={(e) =>
                    form.setFieldValue("validate.viewable", !e.target.checked)
                  }
                >
                  隐藏
                </Checkbox>
              )}
            </Field>

            <Field name="validate.editable">
              {({ field, form }) => (
                <Checkbox
                  checked={!field.value}
                  onChange={(e) => {
                    form.setFieldValue("validate.required", !e.target.checked);
                    form.setFieldValue("validate.editable", !e.target.checked);
                  }}
                >
                  只读
                </Checkbox>
              )}
            </Field>
            <FieldArray
              name="optionsConfig.options"
              render={(arrayHelpers) => {
                return (
                  <>
                    {props.values.optionsConfig.options.map((o, index) => (
                      <div style={{ display: "flex" }}>
                        {/* <Field name={`[${index}].label`} /> */}
                        <Field
                          name={`optionsConfig.options[${index}].checked`}
                          render={({ field, form }) => {
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
                        />
                        <Field
                          render={({ field, form }) => {
                            return (
                              <>
                                <Button
                                  onClick={() => {
                                    arrayHelpers.remove(index);
                                    form.submitForm();
                                  }}
                                >
                                  删除
                                </Button>
                                <Button
                                  onClick={() => arrayHelpers.move(index, 0)}
                                >
                                  移到首位
                                </Button>
                              </>
                            );
                          }}
                        />
                        <Field
                          key={o.id}
                          name={`optionsConfig.options[${index}].value`}
                          defaultValue={o.value}
                          render={({ field, form }) => (
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
                        />
                      </div>
                    ))}
                    <Button
                      onClick={() =>
                        arrayHelpers.push({
                          label: "选项",
                          value: "选项",
                          checked: false,
                        })
                      }
                    >
                      add
                    </Button>
                  </>
                );
              }}
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
