import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
};

export const CartSlice = createSlice({
  name: "xyz",
  initialState,
  reducers: {
    Adddata: (state, action) => {
      const checkalready = state.cartData.some(
        (d) => d.id === action.payload.id
      );
      if (checkalready) return;

      state.cartData.push(action.payload);
    },
    Removedata: (state, action) => {
      const newArr = state.cartData.filter((e) => e.id !== action.payload);
      state.cartData = newArr;
    },
  },
});

export const { Adddata, Removedata } = CartSlice.actions;
export default CartSlice.reducer;
