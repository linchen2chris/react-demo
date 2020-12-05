import { Modal } from 'antd';
import React from 'react';

import { useToggle } from "./useToggle";

export const useModal = ({ title }) => {
  const { open, toggle } = useToggle();

  const MyModal = ({ children }) => (
    <Modal
      title={title}
      centered
      visible={open}
      onOk={toggle}
      onCancel={toggle}
      width={1000}
    >
			<p>hello</p>
      {children}
    </Modal>
  );

	return { MyModal, toggleModal: toggle };
};
