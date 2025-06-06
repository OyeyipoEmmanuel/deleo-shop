import { configureStore } from "@reduxjs/toolkit";
import filterProduct from "./filterProducts.js";
import cartStoreReducer from "./cartStore.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartStoreReducer);

export const store = configureStore({
  reducer: {
    filterProductReducer: filterProduct,
    cartStoreReducer: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});

store.subscribe(() => {
  const state = store.getState().cartStoreReducer;

  localStorage.setItem("Cart-Item", JSON.stringify(state.items));
  localStorage.setItem("Cart-totalQty", parseInt(state.totalQty));
});

export const persistor = persistStore(store);
