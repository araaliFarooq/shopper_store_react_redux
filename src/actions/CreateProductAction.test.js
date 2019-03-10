import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import actionTypes from "./ActionTypes";
import {
  createSuccess,
  createProduct,
  createFail
} from "./CreateProductAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("add product actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("should mock fetch api", () => {
    const store = mockStore({ product: {} });
    const data = {
      product: "shoe",
      quantity: "100",
      unit_price: "50000"
    };
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetchMock.postOnce(
      `${proxyurl}https://shopers-store-api-2.herokuapp.com/api/v2/products`,
      {
        headers: {
          "content-type": "application/json"
        },
        body: { data }
      }
    );
    store.dispatch(createProduct(data));
    expect(store.getActions()).toEqual([]);
  });

  it("should fetch ADDPRODUCTSUCESS on registering new user", () => {
    const response = { message: " product successfully added." };

    const expectedActions = [
      {
        type: actionTypes.ADDPRODUCTSUCCESS,
        payload: response
      }
    ];
    const store = mockStore({ product: {} });
    store.dispatch(createSuccess(response));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should fetch ADDPRODUCTFAILURE on failing to register new user ", () => {
    const response = { message: "product name is missing" };
    const failAction = [
      {
        type: actionTypes.ADDPRODUCTFAIL,
        payload: response
      }
    ];

    const store = mockStore({ product: {} });
    store.dispatch(createFail(response));
    expect(store.getActions()).toEqual(failAction);
  });
});
