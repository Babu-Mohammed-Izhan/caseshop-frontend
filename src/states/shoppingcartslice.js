import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[]
}

const shoppingcartSlice = createSlice({
    name:'shoppingcart',
    initialState,
    reducers: {
        addproduct(state,action) {
            console.log(action)
            console.log(state)
             state.products = [...state.products, action.payload]
        },
        removeproduct(state,action) {
            console.log(action)
            state.products = state.products.filter((product) => product.title !== action.payload.title)
        },
    },
})

export const {addproduct,removeproduct} = shoppingcartSlice.actions
export default shoppingcartSlice.reducer