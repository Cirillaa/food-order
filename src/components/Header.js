import classes from './Header.module.css';

import Logo from './UI/Logo';
import CartButton from './UI/CartButton';
import Menu from './Menu';

function Header () {

 return (
   <header className={classes.header}>
     <div className={classes.container}>
       <div className={classes.logo}>
         <Logo />
       </div>
       <CartButton className={classes.cart} />
       <Menu className={classes.menu} />
     </div>
   </header>
 );
}

export default Header;
