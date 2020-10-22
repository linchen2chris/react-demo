import { Button, Checkbox, Input } from "antd";
import { Controller, useFormContext, useFieldArray } from "react-hook-form";
import React from "react";

const MyList = ({ name }) => {
  const { control, setValue, register } = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name,
    }
  );
  console.log("Line 13", name);
  return (
    <>
      {fields.map((field, index) => (
        /* <input key={field.id} defaultValue={field.value} name={`${name}[${index}].value`} ref={register()} /> */
        <div style={{display: 'flex'}}>
          <Controller
            name={`${name}[${index}].label`}
            defaultValue={field.label}
          />
          <Controller
            name={`${name}[${index}].checked`}
            defaultValue={field.checked}
            render={({ value, onChange }) => {
              return (
                <Checkbox
                  checked={value}
                  onChange={(e) => onChange(e.target.checked)}
                />
              );
            }}
          />
          <Button onClick={() => remove(index)}>删除</Button>
          <Button onClick={() => move(index, 0)}>移到首位</Button>
          <Controller
            key={field.id}
            control={control}
            name={`${name}[${index}].value`}
            defaultValue={field.value}
            render={({ value, onChange }) => (
              <Input
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                  setValue(`${name}[${index}].label`, e.target.value);
                }}
              />
            )}
          />
        </div>
      ))}
      <Button
        onClick={() => append({ label: "选项", value: "选项", checked: false })}
      >
        Add
      </Button>
    </>
  );
};

export default MyList;
