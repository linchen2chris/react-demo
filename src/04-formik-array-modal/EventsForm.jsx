import { Button, Collapse, Modal } from "antd";
import { Formik , FieldArray} from "formik";
import { Input, InputNumber } from "formik-antd";
import React from "react";

const events = [
  { type: "click", actions: [] },
  { type: "hover", actions: [] },
  { type: "move", actions: [] },
  { type: "move1", actions: [] },
  { type: "move2", actions: [] },
  { type: "move3", actions: [] },
];
export const EventsForm = () => (
  <div>
    <h1>Events</h1>
    <Formik
      initialValues={events}
      onSubmit={(values) => console.log("formik array form:", values)}
      render={(formikProps) => {
        return (
          <>
            <Collapse>
              {events.map((event, index) => {
                return (
                  <Collapse.Panel
                    header={event.type}
                    extra={<Button onClick={console.log}>add</Button>}
                  >
                    <FieldArray name={`[${index}].actions`} component={FriendForm}/>
                  </Collapse.Panel>
                );
              })}
            </Collapse>
          </>
        );
      }}
    />
  </div>
);

export const FriendForm = ({ replace, form, remove }) => {
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

export default EventsForm;

const ModalForm = ({
  modal,
  setModal,
  replace,
  initialValues = { name: "", age: "" },
}) => {
  console.log("Line 69", initialValues, modal);
  return (
    <Formik
      initialValues={initialValues}
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
              props.resetForm();
            }}
            onOk={props.handleSubmit}
          >
            <Input name={`name`} />
            <InputNumber name={`age`} />
          </Modal>
        );
      }}
    </Formik>
  );
};
