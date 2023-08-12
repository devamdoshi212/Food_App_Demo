import { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const InputRef = useRef();
  const formsubmithandler = (event) => {
    event.preventDefault();
    const enteredamount = InputRef.current.value;
    const enteredamountnumber = +enteredamount;
    if (
      enteredamount.trim() === 0 ||
      enteredamountnumber < 1 ||
      enteredamountnumber > 5
    ) {
      return;
    }

    props.onAddToCart(enteredamountnumber);
  };
  return (
    <form className={classes.form} onSubmit={formsubmithandler}>
      <Input
        label="Amount"
        ref={InputRef}
        input={{
          type: "number",
          id: "amount",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      ></Input>
      <button>+ADD</button>
    </form>
  );
};
export default MealItemForm;
