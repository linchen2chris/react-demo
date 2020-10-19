import "../App.css";

import { Spin } from "antd";
import { fromEvent } from "rxjs";
import React from "react";

import { LoadingOutlined } from "@ant-design/icons";

import { MyTable } from "./MyTable";
import { dispatch } from "./observers";
import MyBtn from "./MyBtn";

function EventsListener() {
  const [showSpinner, setShowSpinner] = React.useState(false);
  const events = [
    {
      id: "openurl",
      type: "click",
      actions: [{ type: "openURL", data: { url: "http://www.baidu.com" } }],
    },
    {
      id: "refresh",
      type: "click",
      actions: [{ type: "refresh", data: { target: 'table' } }],
    },
  ];

  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];

  React.useEffect(() => {
    events.map((event) => {
      fromEvent(document.getElementById(event.id), event.type).subscribe(
        dispatch(event.actions)
      );
    });
  }, [events, dispatch]);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <Spin
      id="spinner"
      size={"large"}
      indicator={antIcon}
      spinning={showSpinner}
      tip="Loading..."
    >
      <MyBtn id="openurl" label="openurl" />
      <MyBtn id="refresh" label="refresh" />
      <MyTable id="table" dataSource={dataSource}/>
    </Spin>
  );
}

export default EventsListener;
