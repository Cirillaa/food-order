import { useDispatch, useSelector} from 'react-redux';

import CartSVG from "../content/cartSVG";
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';


function  CartButton () {
    const dispatch = useDispatch();
    const cartQuantity = useSelector(state => state.quantity.totalQuantity);

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    }

    return (
      <button className={classes.button} onClick={toggleCartHandler}>
        {}
        <CartSVG className={classes.svg}/>
        <span className={classes.badge}>{cartQuantity}</span>
      </button>
    );
}

export default CartButton;