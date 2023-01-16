import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducers/reducer';
import initialState from './initialState';

const store = configureStore({
  preloadedState: initialState,
  reducer: reducer
});

export default store;
