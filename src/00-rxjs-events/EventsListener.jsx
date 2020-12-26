import "../App.css";

import { Spin } from "antd";
import React, {useReducer} from "react";

import { MyTable } from "./MyTable";
import { dataSource } from './redux/store';
import { generateEvent } from "./redux/generateEvent";
import { generateInitState } from './redux/generateReducers';
import { metaData } from "./metaData";
import MyBtn from './MyBtn';

const compMap = {
  Spin: Spin,
  MyBtn: MyBtn,
  MyTable: MyTable,
};

function EventsListener() {
  const initState= generateInitState(metaData);
  console.log("Line 22", initState);
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "openURL":
        window.open(action.data.url);
      case "refresh":
        return {
          ...state,
          [action.data.target]: { ...state[action.data.target], dataSource },
        };
      default:
        return state;
    }
  }, initState);
  return (
    // <Provider store={store}>
    <>
      {metaData.map((data) => {
        const Comp = compMap[data.comp];
        console.log("Line 41", Comp, state[data.id]);
        return <Comp {...state[data.id]} {...generateEvent(dispatch, data.events)}/>;
      })}
    </>
    // </Provider>
  );
}

export default EventsListener;
