import { useRef, useState } from "react";

import classes from "./MealItemForm.module.css";
import Input from './Input';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form
      className={classes.form}
      onSubmit={submitHandler}
    >
      <Input
        label="Amount"
        input={{
          ref: amountInputRef,
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.button}>+ Add</button>
      {!amountIsValid && <p>Please, entered valid </p>}
    </form>
  );
};

export default MealItemForm;
