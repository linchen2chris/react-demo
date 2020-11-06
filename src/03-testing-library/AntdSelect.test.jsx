import "@testing-library/jest-dom/extend-expect";

import { act, render, fireEvent } from "@testing-library/react";
import React from "react";
import userEvent from '@testing-library/user-event';


import {screen} from '@testing-library/dom';

import App from "./AntdSelect";

describe("AntdSelect", () => {
  it("should select options correctly", async () => {
    const changeSpy = jest.fn();
    const { queryAllByText, getByText,getByRole,  getByTestId, container } = render(
      <App onChange={changeSpy} />
    );

    expect(queryAllByText("Jack").length).toBe(0);
    expect(queryAllByText("Lucy").length).toBe(0);
    const select = container.querySelector(".ant-select-selector");
    const selector = getByRole('combobox');
    await act(async () => {
      await fireEvent.click(select);
    });
    screen.debug();
    expect(queryAllByText("Jack").length).toBe(1);
    expect(queryAllByText("Lucy").length).toBe(1);
    // act(() => {
    //   fireEvent.mouseDown(getByText("Jack"));
    // });
    expect(queryAllByText("Jack").length).toBe(1);
    expect(queryAllByText("Lucy").length).toBe(1);
    expect(changeSpy).toHaveBeenCalled();
  });

  it("should select for userEvent", () => {
    const changeSpy = jest.fn();
    const { queryAllByText, getByText,getByRole,  getByTestId, container } = render(
      <App onChange={changeSpy} />
    );

    expect(queryAllByText("Jack").length).toBe(0);
    expect(queryAllByText("Lucy").length).toBe(0);
    const select = container.querySelector(".ant-select-selector");
    const selector = getByRole('combobox');

    userEvent.select(select, 'jack');
    expect(changeSpy).toHaveBeenCalled();
  });
});
