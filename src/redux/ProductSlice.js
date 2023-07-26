import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems:[],
}

export const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        addItemToCart:(state, action) =>{
            state.cartItems.push(action.payload)
        },
        removeItemFromCart:(state,action) =>{
            console.log("Inside remove from cart ", action.payload);
            let filteredItems = state.cartItems.filter((item)=> item !== action.payload)
            state.cartItems = [...filteredItems]
        }
    }
})

export const {addItemToCart, removeItemFromCart} = productSlice.actions
export default productSlice.reducer
