import { Checkbox, Input } from "antd";
import { Controller, useForm, FormProvider } from "react-hook-form";
import React from "react";

import { formData } from "./mockFormData";
import MyList from "./MyList";

const RHFForm = () => {
  const methods = useForm({
    defaultValues: formData,
  });
  const { register, handleSubmit, errors, control, setValue } = methods;
  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} onChange={handleSubmit(onSubmit)}>
        <Controller
          as={Input}
          control={control}
          type="text"
          aria-invalid={errors.firstName ? "true" : "false"}
          name="label"
        />
        <Controller
          control={control}
          name="validate.required"
          render={({ onChange, value }) => (
            <Checkbox
              checked={value}
              onChange={(e) => {
                onChange(e.target.checked);
                setValue("validate.editable", e.target.checked);
              }}
            >
              必填
            </Checkbox>
          )}
        />
        <Controller
          control={control}
          name="validate.viewable"
          render={({ onChange, value }) => (
            <Checkbox
              checked={!value}
              onChange={(e) => onChange(!e.target.checked)}
            >
              隐藏
            </Checkbox>
          )}
        />

        <Controller
          control={control}
          name="validate.editable"
          render={({ onChange, value }) => (
            <Checkbox
              checked={!value}
              onChange={(e) => {
                onChange(!e.target.checked);
                setValue("validate.required", !e.target.checked);
              }}
            >
              只读
            </Checkbox>
          )}
        />
        <MyList name="optionsConfig.options" />
        <br />
        <input type="submit" />
      </form>
    </FormProvider>
  );
};

export default RHFForm;
