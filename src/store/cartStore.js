import { createSlice } from "@reduxjs/toolkit"

const cartStore = createSlice({
    name: "cart-store",
    initialState: JSON.parse(localStorage.getItem("Cart-Items")) || [],
    reducers: {
        addItemToCart(state, action){
            
            // state = [...cartArray, action.payload]
            
            state.push(action.payload)
            localStorage.setItem('Cart-Items', JSON.stringify(state))

            console.log(state)
            
        },
        removeItemFromCart(state, action){
            state.filter((id) => action.payload.id != id)
            
        }
    }
})

export const cartStoreActions = cartStore.actions

export default cartStore.reducer