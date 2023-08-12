import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultcartstate = {
  items: [],
  totalamount: 0,
};

const cartreducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedtotalamount =
      state.totalamount + action.item.price * action.item.amount;
    // const updateditems = state.items.concat(action.item);
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updateditems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updateditems = [...state.items];
      updateditems[existingCartItemIndex] = updatedItem;
    } else {
      updateditems = state.items.concat(action.item);
    }
    return {
      items: updateditems,
      totalamount: updatedtotalamount,
    };
  }
  return defaultcartstate;
};

const CartContextProvider = (props) => {
  const [CartState, DispatchCartState] = useReducer(
    cartreducer,
    defaultcartstate
  );
  const additem = (item) => {
    DispatchCartState({ type: "ADD", item: item });
  };
  const removeitem = (id) => {
    DispatchCartState({ type: "REMOVE", id: id });
  };

  const cartcontext = {
    items: CartState.items,
    quantity: 0,
    totalamount: CartState.totalamount,
    AddItem: additem,
    RemoveItem: removeitem,
  };
  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
