import { combineReducers } from "@reduxjs/toolkit";
import { homeDataReducer } from "./homeReducer";
import {
  productListReducer,
  productDetailsReducer,
  productSaveReducer,
  productDeleteReducer,
  productReviewSaveReducer,
} from './productReducers';
import { cartReducer } from './cartReducers';
import {
  userSigninReducer,
  userRegisterReducer,
  userUpdateReducer,
} from './userReducers';
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  myOrderListReducer,
  orderListReducer,
  orderDeleteReducer,
} from './orderReducers';

const reducer = combineReducers({
  homeData: homeDataReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  productSave: productSaveReducer,
  productDelete: productDeleteReducer,
  productReviewSave: productReviewSaveReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  userUpdate: userUpdateReducer,
  myOrderList: myOrderListReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
});

export default reducer;