import { Button } from 'antd';
import React from "react";

const MyBtn = ({id, label}) => {
  return <Button id={id}>{label}</Button>;
}

export default MyBtn;
