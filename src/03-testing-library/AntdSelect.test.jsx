import "@testing-library/jest-dom/extend-expect";

import { act, wait, render, fireEvent } from "@testing-library/react";
import React from "react";

import userEvent from "@testing-library/user-event";

import App from "./AntdSelect";

describe("AntdSelect", () => {
  it("should select options correctly", async () => {
    const changeSpy = jest.fn();
    const { queryAllByTestId, getByRole, getByTestId } = render(
      <App onChange={changeSpy} />
    );

    expect(queryAllByTestId("Jack").length).toBe(0);
    expect(queryAllByTestId("Lucy").length).toBe(0);
    await act(async () => {
      await fireEvent.mouseDown(getByRole("combobox", { name: "select" }));
    });
    await act(async () => {
      await fireEvent.click(getByTestId("Jack"));
    });

    expect(changeSpy).toHaveBeenCalledWith("Jack", expect.anything());
    expect(getByTestId("Jack")).toBeInTheDocument();
    expect(getByTestId("Lucy")).toBeInTheDocument();
  });

  it("should select for userEvent", async () => {
    const changeSpy = jest.fn();
    const { getByRole, getByTestId, queryByTestId } = render(
      <App onChange={changeSpy} />
    );

    expect(queryByTestId("Jack")).not.toBeInTheDocument();
    expect(queryByTestId("Lucy")).not.toBeInTheDocument();
    const selector = getByRole("combobox");

    await act(async () => {
      // selectOption only open dropdown can not select.
      await userEvent.selectOptions(selector, ["Jack"]);
    });

    await act(async () => {
      await fireEvent.click(getByTestId("Jack"));
    });
    expect(changeSpy).toHaveBeenCalledWith("Jack", expect.anything());

    expect(getByTestId("Jack")).toBeInTheDocument();
    expect(getByTestId("Lucy")).toBeInTheDocument();
  });
});
