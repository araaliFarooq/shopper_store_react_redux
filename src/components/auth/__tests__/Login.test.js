import React from "react";
import expect from "expect";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import Login from "../Login";

const storeFake = (state, action) => ({
  subscribe: jest.fn(),
  default: jest.fn(),
  getState: () => state,
  dispatch: () => action
});

const store = storeFake({
  loginReducer: {
    errors: {},
    user: {}
  }
});

describe("Login functionality", () => {
  const props = {};
  const wrapper = mount(
    <Provider store={store}>
      <Login {...props} />
    </Provider>
  );
  it("login should render correctly", () => {
    const component = wrapper;
    expect(component).toMatchSnapshot();
  });

  it("listens for submit", () => {
    const url = window.location;
    const arr = url.toString().split("/");
    const form = wrapper.find("#loginform");
    form.simulate("submit");
    expect(window.location.href).toEqual(`${arr[0]}//${arr[2]}/`);
  });

  it("listens for state changes on the add product Form", () => {
    const event = { target: { name: "testName", value: "testValue" } };
    const product = wrapper.find("#username").first();
    product.value = "araali";
    product.simulate("change", event);
    expect(product.value).toEqual("araali");
  });
});
