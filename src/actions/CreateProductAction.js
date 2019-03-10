import actionTypes from "./ActionTypes";
import { toast } from "react-toastify";

export const createFail = data => ({
  type: actionTypes.ADDPRODUCTFAIL,
  payload: data
});

export const createSuccess = response => ({
  type: actionTypes.ADDPRODUCTSUCCESS,
  payload: response
});

export const createProduct = data => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const token = window.localStorage.getItem("token");
  return function(dispatch) {
    fetch(
      `${proxyurl}https://shopers-store-api-2.herokuapp.com/api/v2/products`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`
        },
        CORS: "no-cors",
        body: JSON.stringify({
          product: data.product,
          quantity: data.quantity,
          unit_price: data.unit_price
        })
      }
    )
      .then(res => res.json())
      .then(response => {
        if (response.message === "product successfully added.") {
          dispatch(createSuccess(response.product));
          toast.success(response.message, {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          dispatch(createFail(response));
          toast.error(response.message, {
            position: toast.POSITION.TOP_CENTER
          });
        }
      })
      .catch(response => dispatch(createFail(response.message)));
  };
};
