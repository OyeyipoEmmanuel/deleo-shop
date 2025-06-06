import { createSlice } from "@reduxjs/toolkit";

const persistedState = JSON.parse(localStorage.getItem("Cart-Item")) || [];
const persistedTotalQty =
  (localStorage.getItem("Cart-Item") &&
    localStorage.getItem("Cart-totalQty")) ||
  0;

const cartStore = createSlice({
  name: "cart-store",
  initialState: {
    items: persistedState,
    totalQty: persistedTotalQty,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload.items;

      // Check if there the item exists
      const existingItem = state.items.find((item) => item.id === newItem.id);

      // Add qty by 1 if it exists else add it to the array
      if (!existingItem) {
        state.items = [
          ...state.items,
          { ...newItem, quantity: 1, totalPrice: 0 },
        ];
      } else {
        console.log("Already");
        existingItem.quantity++;
      }

      // Calc the total quantity
      state.totalQty = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );

      // Map through the array to calc the total price of each item
      state.items.map((each) => {
        each.totalPrice = +(each.price * each.quantity);
      });

      // Calc the total Price of all items
      state.totalPrice = state.items.reduce(
        (sum, item) => +(sum + item.totalPrice),
        0
      );

      console.log(state.totalPrice);
    },
    removeItemFromCart(state, action) {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      );
      state.totalQty = state.totalQty - itemToRemove.quantity;
      state.totalPrice = state.totalPrice - itemToRemove.totalPrice;

      state.items = [
        ...state.items.filter((item) => item.id != action.payload),
      ];
    },
    increaseQty(state, action) {
      const item = state.items.find((item) => item.id === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.price;

      state.totalQty++;
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.totalPrice,
        0
      );
    },
    decreaseQty(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (!item) return;
      item.quantity--;
      item.totalPrice = item.quantity * item.price;

      state.totalQty--;

      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.totalPrice,
        0
      );

      if (item.quantity === 0) {
        state.items = [
          ...state.items.filter((item) => item.id != action.payload),
        ];
        return;
      }
    },
  },
});

export const cartStoreActions = cartStore.actions;

export default cartStore.reducer;
