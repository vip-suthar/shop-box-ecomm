import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING 
} from "../constants/cartConstants";

import { cartData } from "../data.json";
import { sampleCartData } from "../temp";

function cartReducer(state = cartData, action) {

  if (!cartData.cartSummary || cartData.cartSummary === null) state.cartSummary = sampleCartData.cartSummary;

  let subT = parseInt(state.cartSummary.subTotal.substring(1));
  let shipping = parseInt(state.cartSummary.shipping.substring(1));
  let discount = parseInt(state.cartSummary.discount.substring(1));
  let total = parseInt(state.cartSummary.total.substring(1));

  let cartItems = [...state.cartItems];
  let cartSummary = {...state.cartSummary};

  switch (action.type) {
    case CART_ADD_ITEM:

      let product = cartItems.find(x => x.id === action.payload.id);
      
      let newTotalP = parseInt(action.payload.totalPrice.substring(1));
      let tempTotal = subT + newTotalP;

      if (product) {
        let totalP = parseInt(product.totalPrice.substring(1));
        tempTotal -= totalP;

        cartSummary.subTotal = cartSummary.subTotal[0] + tempTotal;
        cartSummary.total = cartSummary.total[0] + (total - subT + tempTotal);

        return {
          cartItems: cartItems.map(x => x.id === product.id ? action.payload : x),
          cartSummary: cartSummary
        };
      }

      cartSummary.subTotal = cartSummary.subTotal[0] + tempTotal;
      cartSummary.total = cartSummary.total[0] + (total - subT + tempTotal);


      return {
        cartItems: [...cartItems, action.payload],
        cartSummary: cartSummary
      };
    case CART_REMOVE_ITEM:

    

      return {
        cartItems: cartItems.filter(x => {
          if (x.id === action.payload) {
            let totalP = parseInt(x.totalPrice.substring(1));
 
            cartSummary.subTotal = cartSummary.subTotal[0] + (subT - totalP);
            cartSummary.total = cartSummary.total[0] + (total - totalP);

            return false;
          }
          return true;
        }),
        cartSummary: cartSummary
      };
    case CART_SAVE_SHIPPING:
      return { ...state, shipping: action.payload };
    default:
      return state
  }
}

export { cartReducer }