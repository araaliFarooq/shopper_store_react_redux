import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import actionTypes from "./ActionTypes";
import { loginSuccess, login, loginFail } from "./LoginAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("login actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("should mock fetch api", () => {
    const store = mockStore({ user: {} });
    const data = {
      username: "araali",
      password: "araali"
    };
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetchMock.postOnce(
      `${proxyurl}https://shopers-store-api-2.herokuapp.com/api/auth/login`,
      {
        headers: {
          "content-type": "application/json"
        },
        body: { data }
      }
    );
    store.dispatch(login(data));
    expect(store.getActions()).toEqual([]);
  });

  it("should fetch login success", () => {
    const response = { logged_in_user: "araali" };

    const expectedActions = [
      {
        type: actionTypes.LOGIN,
        payload: response
      }
    ];
    const store = mockStore({ user: {} });
    store.dispatch(loginSuccess(response));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should mopck loginfailure ", () => {
    const response = {
      message: "wrong login credentials or user does not exist"
    };
    const failAction = [
      {
        type: actionTypes.LOGINFAIL,
        payload: response
      }
    ];

    const store = mockStore({ errors: {} });
    store.dispatch(loginFail(response));
    expect(store.getActions()).toEqual(failAction);
  });
});
