import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import HomePage from "./pages/Home";
import { uiActions } from "./store/ui-slice";
import Cart from './components/Cart';

let isInitial = true;

function App(props) {
  const dispatch = useDispatch();
  const isShow = useSelector(state => state.ui.cartIsVisible)

  if (isInitial) {
    isInitial = false;
    return;
  }

  const HideCart = () => {
    dispatch(uiActions.toggle());
  }

  return (

    <div className="App">
      <HomePage />
      {isShow && <Cart onClose={HideCart}/>}
    </div>
  );
}

export default App;
