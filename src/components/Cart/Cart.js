import ModalBootstrap from "../UI/ModalBootstrap";
import classes from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const hasitems = cartctx.items.length > 0;
  const tamount = `Rs ${cartctx.totalamount.toFixed(2)}`;
  // console.log(tamount);
  const cartItemAddHandler = (item) => {
    cartctx.AddItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    // console.log(id);
    cartctx.RemoveItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <ModalBootstrap
      show={props.modal}
      title="Cart Items"
      content={cartItems}
      handleClose={props.onHideCart}
      hasitems={hasitems}
    >
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{tamount}</span>
      </div>
    </ModalBootstrap>
  );
};

export default Cart;
