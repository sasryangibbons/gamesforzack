import { NavLink } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu'

import classes from './MainNavigation.module.css';
import { useState } from 'react';
import { appActions } from '../../store/appStore';
import { dispatchStore } from '../../store';
import { useDispatch } from 'react-redux';

const MainNavigation = () => {
    const dispatch: typeof dispatchStore = useDispatch()

    const [isOpen, setOpen] = useState(false)


    const handleIsOpen = () => {
        setOpen(!isOpen)
    }

    const closeSideBar = () => {
        setOpen(false)
        dispatch(appActions.setSelectedToFalse())
    }


    return (
        <header className={classes.header}>
            <span onClick={closeSideBar} className={classes.logo}><NavLink className={classes.none} to='/'>Games For Zack</NavLink></span>
            <Menu right={true} pageWrapId={"page-wrap"} outerContainerId={'outer'} isOpen={isOpen}
                onOpen={handleIsOpen}
                onClose={handleIsOpen}>

                <NavLink onClick={closeSideBar} className={(data) => data.isActive ? classes.active : ""} to='/' >
                    Home
                </NavLink>

                <NavLink onClick={closeSideBar} className={(data) => data.isActive ? classes.active : ""} to='random-numbers' >
                    Random Numbers
                </NavLink>

                <NavLink onClick={closeSideBar} className={(data) => data.isActive ? classes.active : ""} to='/numbers-in-order' >
                    Numbers In Order
                </NavLink>

                <NavLink onClick={closeSideBar} className={(data) => data.isActive ? classes.active : ""} to='/abc' >
                    ABC's
                </NavLink>

                <NavLink onClick={closeSideBar} className={(data) => data.isActive ? classes.active : ""} to='/words' >
                    Words
                </NavLink>

                <NavLink onClick={closeSideBar} className={(data) => data.isActive ? classes.active : ""} to='/countby' >
                    Count By __
                </NavLink>
            </Menu>


        </header>
    );
};

export default MainNavigation;