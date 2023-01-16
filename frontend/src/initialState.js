import Cookie from 'js-cookie';
import Data from './data.json';
const { cartData, userInfo, homeData, productDetails } = Data;

// const cartItems = Cookie.getJSON('cartItems') || [];
// const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
  homeData: homeData,
  productDetails: productDetails,
  cart: cartData,
  userSignin: { userInfo }
};

export default initialState;