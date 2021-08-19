import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <div className={ classes.header}>
            <div className={classes.logo}>Small Quotes</div>
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink to='/quotelist'>AllQuotes</NavLink></li>
                    <li><NavLink to='/newquote'>NewQuote</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default MainNavigation
