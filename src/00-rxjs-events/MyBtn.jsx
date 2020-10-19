import { Button } from 'antd';
import React from "react";

const MyBtn = ({id, label, onClick}) => {
  return <Button id={id} onClick={onClick}>{label}</Button>;
}

export default MyBtn;
