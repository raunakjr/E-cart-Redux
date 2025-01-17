import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../Product Slice/CartSlice";
const store = configureStore({
  reducer: {
    cart: appReducer,
  },
});

export default store;
