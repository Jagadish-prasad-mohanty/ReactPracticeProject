import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <div className={ classes.header}>
            <div className={classes.logo}>RedEye</div>
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink activeClassName={classes.active} to='/quotelist'>AllQuotes</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/newquote'>NewQuote</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default MainNavigation
