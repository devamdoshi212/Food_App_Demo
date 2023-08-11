import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
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
