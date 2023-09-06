import { useDispatch } from "react-redux";

import classes from "./CartItem.module.css";
import { quantityActions } from '../../store/quantity';

const CartItem = (props) => {
  const { name, quantity, total, price, id } = props.item;

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(
      quantityActions.addItem({
        id,
        name,
        price,
      })
    );
  };

  const decrementHandler = () => {
    dispatch(quantityActions.removeItem(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${total}{" "}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementHandler}>-</button>
          <button onClick={incrementHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
