import React from "react";
import expect from "expect";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import RegisterAttendants from "../RegisterAttendant";

const storeFake = (state, action) => ({
  subscribe: jest.fn(),
  default: jest.fn(),
  getState: () => state,
  dispatch: () => action
});

const store = storeFake({
  registerReducer: {
    errors: {},
    user: {}
  }
});

describe("Register functionality", () => {
  const props = {};
  const wrapper = mount(
    <Provider store={store}>
      <RegisterAttendants {...props} />
    </Provider>
  );
  it("Register should render correctly", () => {
    const component = wrapper;
    expect(component).toMatchSnapshot();
  });

  it("listens for submit", () => {
    const url = window.location;
    const arr = url.toString().split("/");
    const form = wrapper.find("#signup-form");
    form.simulate("submit");
    expect(window.location.href).toEqual(`${arr[0]}//${arr[2]}/`);
  });

  it("listens for state changes on the register Form", () => {
    const event = { target: { name: "testName", value: "testValue" } };
    const username = wrapper.find("#username").first();
    username.value = "testuser@app.com";
    username.simulate("change", event);
    expect(username.value).toEqual("testuser@app.com");
  });
});
