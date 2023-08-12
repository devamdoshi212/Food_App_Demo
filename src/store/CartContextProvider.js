import CartContext from "./CartContext";
const CartContextProvider = (props) => {
  const additem = (item) => {};
  const removeitem = (id) => {};

  const cartcontext = {
    items: [],
    quantity: 0,
    totalamount: 0,
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
