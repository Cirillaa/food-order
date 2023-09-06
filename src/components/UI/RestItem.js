import React from 'react';

import classes from './RestItem.module.css';

const RestItem = props => {
    return <div className={classes.item}>
            <img src={props.img} alt='food'></img>
            <img src={props.logo} alt='logo'></img>
        </div>
}

export default RestItem;