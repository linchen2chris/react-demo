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

  const { MyModal, toggleModal } = useModal({ title: "Test hookModal" });
  return (
    <div>
      <p>{open ? "on" : "off"}</p>
      <button onClick={toggle}>toggle</button>

      <MyModal>hello</MyModal>
      <button onClick={toggleModal}>show modal</button>
      <Demo />
    </div>
  );
};
