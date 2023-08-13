import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [highlighted, sethighlighted] = useState(false);
  const btn = `${classes.button} ${highlighted ? classes.bump : ""}`;
  const cart = useContext(CartContext);
  const { items: Cartitems } = cart;
  useEffect(() => {
    if (Cartitems.length === 0) {
      return;
    }
    sethighlighted(true);
    const timer = setTimeout(() => {
      sethighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [Cartitems]);
  const numberofitems = cart.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={btn} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofitems}</span>
    </button>
  );
};

export default HeaderCartButton;
