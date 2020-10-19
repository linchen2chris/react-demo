import { generateEvent } from './generateEvent';
import store from './store';

describe("generateEvent", () => {
  it("should generate event correctly", () => {
    const event = {
      type: "onClick",
      actions: [{ type: "openURL", data: { url: "http://www.baidu.com" } }],
    };
    expect(generateEvent(event)).toEqual({
      onClick: () => {
        event.actions.map((action) => store.dispatch(action));
      },
    });
  });
});
