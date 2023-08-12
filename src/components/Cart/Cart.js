import ModalBootstrap from "../UI/ModalBootstrap";
import classes from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const hasitems = cartctx.items.length > 0;
  const cartItemAddHandler = (item) => {};
  const cartItemRemoveHandler = (id) => {};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler}
          onAdd={cartItemAddHandler}
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
        <span>{cartctx.totalamount.toFixed(2)}</span>
      </div>
    </ModalBootstrap>
  );
};

export default Cart;
