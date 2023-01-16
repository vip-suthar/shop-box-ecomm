import Axios from "axios";
import Cookie from "js-cookie";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING,
  // CART_SAVE_PAYMENT
} from "../constants/cartConstants";

import { sampleProductDetails } from "../temp";

const API_URL = process.env.REACT_APP_API_URL + "";

const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = { data: sampleProductDetails };
    // await Axios.get(API_URL + '/products/' + productId);
    dispatch({
      type: CART_ADD_ITEM, 
      payload: {
        id: data.id,
        title: data.title,
        image: data.images[0],
        price: data.origPrice,
        qty: qty,
        totalPrice: data.origPrice[0] + (parseInt(data.origPrice.substring(1))*parseInt(qty))
      }
    });
    const { cart: { cartItems } } = getState();
    // console.log(cartItems);
    // Cookie.set("cartItems", JSON.stringify(cartItems));

  } catch (error) {

  }
}
const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });

  const { cart: { cartItems } } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
}

const saveShipping = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING, payload: data });
}
// const savePayment = (data) => (dispatch) => {
//   dispatch({ type: CART_SAVE_PAYMENT, payload: data });
// }
export { addToCart, removeFromCart, saveShipping, /* savePayment */ }