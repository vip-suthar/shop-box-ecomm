import {
  HOME_LOAD_REQUEST,
  HOME_LOAD_SUCCESS,
  HOME_LOAD_FAIL
} from '../constants/homeConstants';

import { homeData } from '../data.json'

function homeDataReducer(state, action) {
  switch (action.type) {
    case HOME_LOAD_REQUEST:
      return { loading: true };
    case HOME_LOAD_SUCCESS:
      return { loading: false, data: action.payload };
    case HOME_LOAD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return { loading: false, data: homeData };
  }
}
export {
  homeDataReducer
};
