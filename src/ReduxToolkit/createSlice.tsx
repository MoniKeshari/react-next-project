import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartState, Item } from '../types/hometype'
const initialState: CartState = {
    items: [],
    totalprice: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Item>) => {
            const item: Item = action.payload;


            const existingItem = state.items.find(i =>
                i?.id === item?.id);


            if (existingItem) {
                if (existingItem.quantity !== undefined) {
                    existingItem.quantity++;
                    state.totalprice += item.price

                }

            } else {
                state.items.push({ ...action.payload, quantity: 1});

            }
        },
        incrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item)
                if (item.quantity !== undefined) {
                    item.quantity++;
                    state.totalprice += item.price
                }

        },
        decrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                if (item.quantity === 1) {
                    item.quantity = 1
                } else {
                    if (item.quantity !== undefined)
                        item.quantity--;
                    state.totalprice -= item.price

                }

            }

        },
        removeItem: (state, action) => {
            const removedItem = state.items.find((item) => item.id === action.payload);
            if (removedItem) {
                state.totalprice = removedItem.quantity-1;
                state.items = state.items.filter((item) => item.id !== action.payload);
            }
        },


        clearCart: state => {
            state.items = [];
        },


    }
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
