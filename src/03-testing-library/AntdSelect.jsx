import { Input, Select } from "antd";
import React from "react";

const { Option } = Select;

export default function AntSelect({ onChange }) {
  return (
    <Select aria-label="select" style={{ width: 120 }} onChange={onChange}>
      <Option title="Lucy" data-testid="Lucy" value="Lucy">
        Lucy
      </Option>
      <Option title="Jack" data-testid="Jack" value="Jack">
        Jack
      </Option>
    </Select>
  );
}
