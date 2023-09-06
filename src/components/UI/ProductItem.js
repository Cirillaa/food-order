import { useDispatch, useSelector } from "react-redux";
import classes from "./ProductItem.module.css";
import { quantityActions } from '../../store/quantity';
import { uiActions } from "../../store/ui-slice";
import Notification from "./Notification";
import { Fragment } from "react";

let isInitial = true;

const ProductItem = (props) => {
  const { name, price, description, id, img } = props;

  const dispatch = useDispatch();
  const notification = useSelector( state => state.ui.notification)

  const addToCart = () => {
    dispatch(
      quantityActions.addItem({
        id,
        name,
        price,
      })
    );

    dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    
    setTimeout(() => {
      dispatch(
        uiActions.removeNotification()
      )
    }, 1000);
  };

  return (
    <Fragment>
      {notification && isInitial && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <li className={classes.item}>
        <img
          src={img}
          alt="foodPhoto"
          className={classes.foodPhoto}
        />
        <header>
          <h3 className={classes.name}>{name}</h3>
          <div className={classes.price}>${price}</div>
        </header>
        <p className={classes.description}>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </li>
    </Fragment>
  );
};

export default ProductItem;
