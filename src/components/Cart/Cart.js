import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal
      modal={props.modal}
      title="Cart Items"
      content={cartItems}
      hide={props.onHideCart}
    >
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
    </Modal>
  );
};

export default Cart;
