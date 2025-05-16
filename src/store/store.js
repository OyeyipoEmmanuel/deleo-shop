import { configureStore } from "@reduxjs/toolkit";
import filterProduct from './filterProducts.js'

export const store = configureStore({
    reducer:{
        filterProductReducer: filterProduct
    }
})