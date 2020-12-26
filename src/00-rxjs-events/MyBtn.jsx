import { Button } from 'antd';
import React from "react";

const MyBtn = ({id, label, onClick, ...rest}) => {
  console.log("Line 5", rest);
  return <Button id={id} onClick={onClick}>{label}</Button>;
}

export default MyBtn;
