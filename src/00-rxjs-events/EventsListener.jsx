import "../App.css";

import { Provider, connect } from "react-redux";
import { Spin } from "antd";
import React from "react";

import { MyTable } from "./MyTable";
import { generateEvent } from "./redux/generateEvent";
import { metaData } from "./metaData";
import MyBtn from "./MyBtn";
import store from "./redux/store";

const compMap = {
  Spin: Spin,
  MyBtn: MyBtn,
  MyTable: MyTable,
};

function EventsListener() {
  const data = metaData[1];
  {
    /* {metaData.map((data) => { */
  }
  /* const Comp = compMap[data.comp]; */
  const WrapComp = connect(
    (state) => state[data.id],
    (dispatch) => generateEvent(dispatch, data.events)
  )(MyBtn);
  return (
    <Provider store={store}>
      {metaData.map((data) => {
        const Comp = compMap[data.comp];
        const WrapComp = connect(
          (state) => state[data.id],
          (dispatch) => generateEvent(dispatch, data.events)
        )(Comp);
        return <WrapComp />;
      })}
    </Provider>
  );
}

export default EventsListener;
