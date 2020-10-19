import { generateInitState } from './generateReducers';
import { metaData } from '../metaData';

describe("generateReducers", () => {
  it("should return spinner reducer", () => {
    expect(generateInitState(metaData)).toMatchObject({
      spinner: {
        size: "large",
        spinner: false,
        tip: "Loading",
      },
    });
  });
});
