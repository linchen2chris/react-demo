import { Button, Checkbox, Form, Input } from "antd";
import { lensPath, set } from 'ramda';
import React from "react";

const AntdForm = () => {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      onValuesChange={(c, a) => {
        console.log("Line 46", c, a);
      }}
      onFinish={(values) => {
        console.log("finish", values);
      }}
    >
      <Form.Item name={["chen", 'status'] }> </Form.Item>

      <Form.Item name="age">
        <Input
          onChange={(e) =>
            form.setFieldsValue(set(lensPath(['chen', 'status']), e.target.value, {}))
          }
          suffix={
            <Form.Item name="click" valuePropName="checked">
              <Checkbox />
            </Form.Item>
          }
        />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        submit
      </Button>
    </Form>
  );
};

export default AntdForm;
