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
      actions: [{ type: "refresh", data: { target: "tabel" } }],
    },
    {
      id: "submit",
      type: "click",
      actions: [
        [{ type: "submit", onsucsee: [] }, { type: "closeSpinner" }],
        [{ type: "showSpinner" }],
      ],
    },
  ];

  React.useEffect(() => {
    events.map((event) => {
      fromEvent(document.getElementById(event.id), event.type).subscribe(
        dispatch(event.actions, { setShowSpinner })
      );
    });
  }, [events, setShowSpinner, dispatch]);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
      <Spin
        size={"large"}
        indicator={antIcon}
        spinning={showSpinner}
        tip="Loading..."
      >
        <MyBtn id="openurl" label="openurl" />
        <MyBtn id="refresh" label="refresh" />
        <MyBtn id="submit" label="submit" />
        <MyTable />
      </Spin>
  );
}

export default EventsListener;
