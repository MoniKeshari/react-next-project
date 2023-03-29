import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface Item {
    id: number;
    // other properties of an item, such as name, price, etc.
    quantity: number;
}
export interface CartState {
    items: Item[];
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    } as CartState,

    reducers: {
        addToCart: (state, action: PayloadAction<Item>) => {
            const item: Item = action.payload;
            console.log(item, 'item------------------->');

            const existingItem = state.items.find(i => i?.id === item?.id);


            if (existingItem) {
                existingItem.quantity++;
                console.log(existingItem.quantity++, 'res');

            } else {

                state.items.push({ ...action.payload, quantity: 1 });
                console.log(state.items.push({ ...action.payload, quantity: 1 }), 'check');

            }
        },
        incrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item)
                item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                if (item.quantity === 1) {
                    item.quantity = 1
                } else {
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
        }
    }
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
