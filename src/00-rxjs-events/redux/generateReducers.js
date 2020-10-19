export const generateInitState = (data) => {
  let result = {};
  data.forEach((d) => {
    result[d.id] = d.data;
  });
  return result;
};
