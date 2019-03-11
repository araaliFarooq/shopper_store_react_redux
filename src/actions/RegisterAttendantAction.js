import actionTypes from "./ActionTypes";
import { toast } from "react-toastify";

export const signupFail = data => ({
  type: actionTypes.SIGNUPFAIL,
  payload: data
});

export const signupSuccess = response => ({
  type: actionTypes.SIGNUPSUCCESS,
  payload: response
});

export const registerAttendant = data => {
  //   const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const token = window.localStorage.getItem("token");
  return function(dispatch) {
    fetch(`https://shopers-store-api-2.herokuapp.com/api/auth/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`
      },
      CORS: "no-cors",
      body: JSON.stringify({
        user_name: data.username,
        contact: data.contact,
        password: data.password,
        role: data.role
      })
    })
      .then(res => res.json())
      .then(response => {
        if (response.message === "Attendant account created") {
          dispatch(signupSuccess(response));
          toast.success(response.message, {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          dispatch(signupFail(response));
          toast.error(response.message, {
            position: toast.POSITION.TOP_CENTER
          });
        }
      })
      .catch(response => dispatch(signupFail(response.message)));
  };
};
