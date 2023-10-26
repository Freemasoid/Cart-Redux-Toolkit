import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import modalReudcer from "./features/cart/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReudcer,
  },
});
