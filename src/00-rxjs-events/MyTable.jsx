import { Table } from "antd";
import React from "react";

export const MyTable = ({dataSource}) => {

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
  ];
  const refresh = () => {
    console.log("Line 38 refresh table");
  };
  return <Table dataSource={dataSource} columns={columns} />;
};
