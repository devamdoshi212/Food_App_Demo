import { useContext, useState } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
import ModalBootstrap from "../UI/ModalBootstrap";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckingOut, setisCheckingOut] = useState(false);
  const [isSumbitting, setisSumbitting] = useState(false);
  const [didSumbit, setdidSumbit] = useState(false);
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

  const sumbitOrderHandler = async (userdata) => {
    // console.log(userdata);
    setisSumbitting(true);
    const Response = await fetch(
      "https://food-app-92ca5-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userdata,
          orderitems: cartctx.items,
        }),
      }
    );
    if (!Response.ok) return;
    setisSumbitting(false);
    setdidSumbit(true);
    cartctx.ClearCart();
  };

  const isSumbittingcontent = <p>Sending order data...</p>;
  const didSumbitcontent = (
    <>
      <h1>Order Placed Successfully</h1>
      <div className={classes.actions}>
        <button type="button" onClick={props.onHideCart}>
          Cancel
        </button>
      </div>
    </>
  );
  let content = cartItems;
  let totalamountcomponent = (
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>{tamount}</span>
    </div>
  );
  if (isSumbitting) {
    content = isSumbittingcontent;
    totalamountcomponent = "";
  }
  if (!isSumbitting && didSumbit) {
    content = didSumbitcontent;
    totalamountcomponent = "";
  }

  const Modal = (
    <ModalBootstrap
      show={props.modal}
      title="Cart Items"
      content={content}
      setdidSumbit={setdidSumbit}
      handleClose={props.onHideCart}
      hasitems={hasitems}
      orderHandler={orderHandler}
      isCheckingOut={isCheckingOut}
    >
      {totalamountcomponent}
      {isCheckingOut && !didSumbit && !isSumbitting && (
        <Checkout
          onConfirm={sumbitOrderHandler}
          onCancel={props.onHideCart}
        ></Checkout>
      )}
    </ModalBootstrap>
  );
  return Modal;
};

export default Cart;
