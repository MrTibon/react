import React from 'react';
import classes from './Menu.module.css';

const Menu = () => {
    return (<nav className={classes.menu}>
        <div className={classes.item}>
            <a href={'#'}> My Page </a>
        </div>
        <div className={classes.item}>
            <a href={'#'}> Messages </a>
        </div>
        <div className={classes.item}>
            <a href={'#'}> News </a>
        </div>
        <div className={classes.item}>
            <a href={'#'}> Music </a>
        </div>
    </nav>);
}

export default Menu;