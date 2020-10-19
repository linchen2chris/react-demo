import store from "./store";

export const generateEvent = (dispatch, events) => {
  let result = {};
  if (events) {
    events.forEach((event) => {
      result[event.type] = () => event.actions.map(dispatch);
    });
  }
	console.log("Line 10", result);
  return result;
};
