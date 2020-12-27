import React from "react";

import { useModal } from "./useModal";
import { useToggle } from "./useToggle";
import debounce from "lodash.debounce";

const Demo = () => {
  const [val, setVal] = React.useState("");
  const debounced = React.useRef(
    debounce((newValue) => {
      console.log(newValue);
    }, 1000)
  );

  React.useEffect(() => debounced.current(val), [val]);

  return (
    <div>
      <input
        type="text"
        value={val}
        placeholder="Debounced input"
        onChange={(e) => {
          setVal(e.currentTarget.value);
        }}
      />
      <div>{val}</div>
    </div>
  );
};
export const Hooks = () => {
  const { open, toggle } = useToggle();
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case "getData":
          return { ...state, data: action.data };
        default:
          return state;
      }
    },
    { data: 2 }
  );
  const wrapDispatch = (dispatch) => {
    return (action) => {
      if (action instanceof Promise) {
        return action.then(dispatch);
      }
      if (typeof action === 'function') {
        return action(wrapDispatch(dispatch));
      }
      return dispatch(action);
    };
  };

	const asyncDispatch = wrapDispatch(dispatch);

	const { MyModal, toggleModal } = useModal({ title: "Test hookModal" });
  return (
    <div>
      <p>{open ? "on" : "off"}</p>
      <button onClick={toggle}>toggle</button>

      <MyModal>hello</MyModal>
      <button onClick={toggleModal}>show modal</button>
      <Demo />

      <h1>{state.data}</h1>
      <button onClick={() => asyncDispatch((dispatch) => new Promise(resolve => resolve(9)).then(res => dispatch({type: 'getData', data: res}, res)))}>
        refresh1
      </button>
      <button onClick={() => asyncDispatch(new Promise((resolve, reject) => resolve({ type: "getData", data: 4 })))}>
        refresh
      </button>
    </div>
  );
};
