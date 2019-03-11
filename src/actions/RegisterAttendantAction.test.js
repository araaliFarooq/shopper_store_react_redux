import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import actionTypes from "./ActionTypes";
import {
  signupSuccess,
  registerAttendant,
  signupFail
} from ".//RegisterAttendantAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("signup actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("should mock fetch api", () => {
    const store = mockStore({ user: {} });
    const data = {
      username: "araali",
      contact: "0700-000000",
      password: "password",
      role: "admin"
    };
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetchMock.postOnce(
      `https://shopers-store-api-2.herokuapp.com/api/auth/register`,
      {
        headers: {
          "content-type": "application/json"
        },
        body: { data }
      }
    );
    store.dispatch(registerAttendant(data));
    expect(store.getActions()).toEqual([]);
  });

  it("should fetch SIGNUPSUCESS on registering new user", () => {
    const response = { message: "Attendant account created" };

    const expectedActions = [
      {
        type: actionTypes.SIGNUPSUCCESS,
        payload: response
      }
    ];
    const store = mockStore({ user: {} });
    store.dispatch(signupSuccess(response));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should fetch SIGNUPFAILURE on failing to register new user ", () => {
    const failAction = [
      {
        type: actionTypes.SIGNUPFAIL,
        payload: "username exists"
      }
    ];
    const emailError = "username exists";
    const store = mockStore({ user: {} });
    store.dispatch(signupFail(emailError));
    expect(store.getActions()).toEqual(failAction);
  });
});
