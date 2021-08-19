import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
  } from "../constants/actionType";
  
  import { products } from "../../data";
  
  const INITIAL_STATE = {
    products,
    cart: [],
  };
  
  const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
      case ADD_TO_CART:
        //Get the item data from products
        const item = state.products.find((prod) => prod.id === payload.id);
        //Check if item is in cart already
        const inCart = state.cart.find((item) =>
          item.id === payload.id ? true : false
        );
        return {
          ...state,
          cart: inCart
            ? state.cart.map((item) =>
                item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
              )
            : [...state.cart, { ...item, qty: 1 }],
        };
      case REMOVE_FROM_CART:
        return {
            ...state,
            cart: state.cart.filter(item => item.id !== payload.id)
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  