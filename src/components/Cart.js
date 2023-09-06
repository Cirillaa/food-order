import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import CartItem from './UI/CartItem';
import Modal from "./UI/Modal";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.quantity.items);
  return (
    <Modal
      className={classes.cart}
      onClose={props.onCLose}
    >
      <h2>Your Shopping Cart</h2>
      <div className={classes.wrap}>
        <ul>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                name: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))}
        </ul>
      </div>
      <button
        onClick={props.onClose}
        className={classes.closeButton}
      >
        Close
      </button>
    </Modal>
  );
};

export default Cart;
