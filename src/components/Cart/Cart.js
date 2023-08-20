import ModalBootstrap from "../UI/ModalBootstrap";
import classes from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
const Cart = (props) => {
  const [isCheckingOut, setisCheckingOut] = useState(false);
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
  const orderHandler = (props) => {
    setisCheckingOut(true);
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

  const sumbitOrderHandler = (userdata) => {
    // console.log(userdata);
    fetch("https://food-app-92ca5-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userdata,
        orderitems: cartctx.items,
      }),
    });
  };

  return (
    <ModalBootstrap
      show={props.modal}
      title="Cart Items"
      content={cartItems}
      handleClose={props.onHideCart}
      hasitems={hasitems}
      orderHandler={orderHandler}
      isCheckingOut={isCheckingOut}
    >
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{tamount}</span>
      </div>
      {isCheckingOut && (
        <Checkout
          onConfirm={sumbitOrderHandler}
          onCancel={props.onHideCart}
        ></Checkout>
      )}
    </ModalBootstrap>
  );
};

export default Cart;
