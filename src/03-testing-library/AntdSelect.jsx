import React from "react";
import { Select } from "antd";

const { Option } = Select;


export default function App({onChange}) {
  return (
    <Select data-testid="select" tyle={{ width: 120 }} onChange={onChange}>
      <Option value="lucy">Lucy</Option>
      <Option value="Yiminghe">yiminghe</Option>
      <Option value="jack">Jack</Option>
    </Select>
  );
}
