import { configureStore } from '@reduxjs/toolkit';
import { businessDetailsReducer } from './business/businessDetails';

const store = configureStore({
  reducer: {
    businessDetails: businessDetailsReducer,
  },
});

export default store;
