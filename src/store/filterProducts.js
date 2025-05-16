import { createSlice } from "@reduxjs/toolkit"

const filterState = {label: "menShirtFilter", priceRange: 1000000, rating: 5}

const filterProducts = createSlice({
    name: "filter-products",
    initialState: filterState,
    reducers: {
        getFilterValues(state, action){
            state.label = action.payload.productType
            state.priceRange = action.payload.priceRange
            state.rating = action.payload.rating
        }
    }
})

export const filterProductsActions = filterProducts.actions

export default filterProducts.reducer