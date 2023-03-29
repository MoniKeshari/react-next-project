import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import card from '../components/json/card'
export interface Item {
    id: number;
    // other properties of an item, such as name, price, etc.
    quantity: number;
  }
  
  export interface CartState {
    items: Item[];
 
   
  }
  
  const initialState: CartState = {
    items: card, 
 
   
    // use the imported JSON data as the initial state
  };
  

const cartSlice = createSlice({
    name: 'cart',
    initialState,
   
    reducers: {
        addToCart: (state, action: PayloadAction<Item>) => {
            const item: Item = action.payload;
            console.log(item, 'item99999');
            
            console.log(item, 'item------------------->');

            const existingItem = state.items.find(i => 
                i?.id === item?.id);


            if (existingItem) {
                if (existingItem.quantity !== undefined) {
                    existingItem.quantity++;
                    console.log(existingItem.quantity++, 'reponse');
                }
               

            } else {

                state.items.push({ ...action.payload, quantity: 1 });
                console.log(state.items.push({ ...action.payload, quantity: 1 }), 'check');

            }
        },
        incrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item)
            if(item.quantity !== undefined){
                item.quantity++;
            }
            //    
        },
        decrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                if (item.quantity === 1) {
                    item.quantity = 1
                } else {
                    if( item.quantity !== undefined)
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
