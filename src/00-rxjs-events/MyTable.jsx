import { Table } from "antd";
import React from "react";

export const MyTable = ({dataSource, columns}) => {

  return <Table dataSource={dataSource} columns={columns} />;
};
