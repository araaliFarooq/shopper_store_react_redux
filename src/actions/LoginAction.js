import actionTypes from "./ActionTypes";
import { toast } from "react-toastify";

export const loginFail = response => ({
  type: actionTypes.LOGINFAIL,
  payload: response
});

export const loginSuccess = response => ({
  type: actionTypes.LOGIN,
  payload: response
});

export const login = userData => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  return function(dispatch) {
    console.log("user_data", userData);
    fetch(
      `${proxyurl}https://shopers-store-api-2.herokuapp.com/api/auth/login`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        CORS: "no-cors",
        body: JSON.stringify({
          user_name: userData.user_name,
          password: userData.password
        })
      }
    )
      .then(res => res.json())
      .then(response => {
        if (response.token) {
          dispatch(loginSuccess(response));
          localStorage.setItem("token", response.token);
          toast.success("Logged in", {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          dispatch(loginFail(response));
          toast.error(response.message, {
            position: toast.POSITION.TOP_CENTER
          });
        }
      })
      .catch(response => dispatch(loginFail(response)));
  };
};
