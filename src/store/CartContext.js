import React from "react";
const CartContext = React.createContext({
  items: [],
  quantity: 0,
  totalamount: 0,
  AddItem: (item) => {},
  RemoveItem: (item) => {},
  ClearCart: () => {},
});
export default CartContext;
