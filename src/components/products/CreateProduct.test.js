import React from "react";
import expect from "expect";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import CreateProduct from "./CreateProduct";

const storeFake = (state, action) => ({
  subscribe: jest.fn(),
  default: jest.fn(),
  getState: () => state,
  dispatch: () => action
});

const store = storeFake({
  createProductReducer: {
    errors: {},
    product: {}
  }
});

describe("Add product functionality", () => {
  const props = {};
  const wrapper = mount(
    <Provider store={store}>
      <CreateProduct {...props} />
    </Provider>
  );
  it("CreateProduct should render correctly", () => {
    const component = wrapper;
    expect(component).toMatchSnapshot();
  });

  it("listens for submit", () => {
    const url = window.location;
    const arr = url.toString().split("/");
    const form = wrapper.find("#add_product");
    form.simulate("submit");
    expect(window.location.href).toEqual(`${arr[0]}//${arr[2]}/`);
  });

  it("listens for state changes on the add product Form", () => {
    const event = { target: { name: "testName", value: "testValue" } };
    const product = wrapper.find("#product").first();
    product.value = "shoes";
    product.simulate("change", event);
    expect(product.value).toEqual("shoes");
  });
});
