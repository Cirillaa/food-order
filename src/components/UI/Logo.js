import classes from './Logo.module.css';

function Logo (props) {
    return (
      <div
        className={`${classes.white} ${props.className ? props.className : ""}`}
      >
        <b>yellow</b>kitchen
        <div className={classes.block}></div>
      </div>
    );
}

export default Logo;