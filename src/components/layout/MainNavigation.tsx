import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}><NavLink className={classes.none} to='/'>Games For Zack</NavLink></div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink className={(data) => data.isActive ? classes.active : ""} to='random-numbers' >
                            Random Numbers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(data) => data.isActive ? classes.active : ""} to='/numbers-in-order' >
                            Numbers In Order
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(data) => data.isActive ? classes.active : ""} to='/abc' >
                            ABC's
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(data) => data.isActive ? classes.active : ""} to='/words' >
                            Words
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;