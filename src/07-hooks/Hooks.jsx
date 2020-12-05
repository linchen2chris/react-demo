import React from 'react';

import { useModal } from './useModal';
import { useToggle } from './useToggle';

export const Hooks = () => {
  const { open, toggle } = useToggle();

  const {MyModal, toggleModal} = useModal({title: "Test hookModal"});
  return (
    <div>
      <p>{open ? "on" : "off"}</p>
      <button onClick={toggle}>toggle</button>


      <MyModal>hello</MyModal>
      <button onClick={toggleModal}>show modal</button>
    </div>
  );
};
