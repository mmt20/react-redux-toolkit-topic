import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../interface";
import { addItemToShoppingCart } from "../../../Utils/functions";

interface cartState {
  cartItems: IProduct[];
}

const initialState: cartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCartAction: (state, actionPayload: PayloadAction<IProduct>) => {
      state.cartItems = addItemToShoppingCart(
        state.cartItems,
        actionPayload.payload
      );
    },
  },
});

export const { addItemToCartAction } = cartSlice.actions;

export default cartSlice.reducer;
