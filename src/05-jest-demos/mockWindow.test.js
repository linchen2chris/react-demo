describe("mockWindow", () => {
  it("should mock window.open", () => {
    global.open = jest.fn();
		window.open('http://www.baidu.com');
		expect(global.open).toBeCalledWith('http://www.baidu.com');
  });
});
