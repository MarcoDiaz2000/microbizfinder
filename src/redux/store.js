import { configureStore } from '@reduxjs/toolkit';

const dummyReducer = (state = {}) => state;

const store = configureStore({
  reducer: {
    dummy: dummyReducer,
  },
});

export default store;
