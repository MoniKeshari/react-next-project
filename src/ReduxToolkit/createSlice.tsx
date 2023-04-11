import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartState, Item } from '../types/hometype'
const initialState: CartState = {
    items: [],
    products: [],
    isLoading: true,
    filterValue: 'all',


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

                }

            } else {
                state.items.push({ ...action.payload, quantity: 1 });

            }
        },
        incrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item)
                if (item.quantity !== undefined) {
                    item.quantity++;
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
                }

            }

        },
        removeItem: (state, action) => {
            const removeItem = state.items.filter((item) => item.id !== action.payload);
            state.items = removeItem;
        },


        clearCart: state => {
            state.items = [];
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setFilterValue: (state, action) => {
            state.filterValue = action.payload;
        },

    }
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem, clearCart, setProducts, setIsLoading, setFilterValue } = cartSlice.actions;

export default cartSlice.reducer;
