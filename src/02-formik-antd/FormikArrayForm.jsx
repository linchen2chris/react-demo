import { Button, Modal } from "antd";
import { Form, Input, InputNumber } from "formik-antd";
import { Formik, FieldArray } from "formik";
import React from "react";

export const FormikArrayForm = () => (
  <div>
    <h1>Friend List</h1>
    <Formik
      initialValues={{ friends: [{ name: "jared", age: 12 }] }}
      onSubmit={(values) => console.log("formik array form:", values)}
      render={(formikProps) => (
        <FieldArray name="friends" component={FriendForm} />
      )}
    />
  </div>
);

export const FriendForm = ({
  move,
  swap,
  push,
  insert,
  unshift,
  replace,
  pop,
  form,
  remove,
}) => {
  const { friends } = form.values;
  const [modal, setModal] = React.useState({ show: false, index: 0 });
  return (
    <>
      {friends.map((friend, idx) => {
        return (
          <p>
            {friend.name}-{friend.age}
            <Button
              onClick={() => {
                setModal({ show: true, index: idx });
              }}
            >
              edit
            </Button>
            <Button
              onClick={() => {
                remove(idx);
              }}
            >
              remove
            </Button>
          </p>
        );
      })}
      <Button
        onClick={() => {
          setModal({ show: true, index: friends.length });
        }}
      >
        Add
      </Button>
      <ModalForm
        modal={modal}
        setModal={setModal}
        replace={replace}
        initialValues={friends[modal.index]}
      />
    </>
  );
};

export default FormikArrayForm;

const ModalForm = ({ modal, setModal, replace, initialValues }) => {
  return (
    <Formik
      initialValues={initialValues || { name: "", age: "" }}
      enableReinitialize // very important
      onSubmit={(values) => {
        replace(modal.index, values);
        setModal({ show: false });
      }}
    >
      {(props) => {
        console.log("Line 78", props.values);
        return (
          <Modal
            visible={modal.show}
            onCancel={() => {
              setModal({ show: false });
              /* props.resetForm(); */
            }}
            onOk={props.handleSubmit}
            okButtonProps={{ htmlType: "submit" }}
          >
            <Input name={`name`} />
            <InputNumber name={`age`} />
          </Modal>
        );
      }}
    </Formik>
  );
};
