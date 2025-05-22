import { configureStore } from "@reduxjs/toolkit";
import filterProduct from './filterProducts.js'
import cartStoreReducer from "./cartStore.js"

export const store = configureStore({
    reducer:{
        filterProductReducer: filterProduct,
        cartStoreReducer: cartStoreReducer,
    }
})