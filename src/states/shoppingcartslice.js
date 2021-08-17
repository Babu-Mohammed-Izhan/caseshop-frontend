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
             state.products = [...state.products, action.payload]
        },
        removeproduct(state,action) {
            state.products = state.products.filter((product) => product.name !== action.payload.name)
        },
    },
})

export const {addproduct,removeproduct} = shoppingcartSlice.actions
export default shoppingcartSlice.reducer