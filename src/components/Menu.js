import { useState } from 'react';

import classes from './Menu.module.css';
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function Menu () {
  const [active, setActive] = useState(false);
    return (
      <div
        className={classes.menuBtn}
        onClick={() => setActive(!active)}
      >
        {active ? <AiOutlineClose size={30} className={classes.close}/> : <AiOutlineMenu size={30} className={classes.open}/>}
        <div className={active ? [classes.menu, classes.active].join(' ') : [classes.menu]}>
          <div className={classes.contacts}>
            <p className={classes.phone}>0800 111 126</p>
            <p className={classes.time}>8:00 - 22:00</p>
          </div>
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Delivery</a>
            </li>
            <li>
              <a href="">Restaurants</a>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Menu;