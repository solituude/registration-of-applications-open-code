import React from "react";
import s from './navbar.module.scss';
import {Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

import lightThemeToggleIcon from '../../img/ligthThemeIcon.svg';

const NavBar = () => {
    return(
        <Navbar className={s.nav__container}>
                <div className={s.toggle__theme}>
                    <img src={lightThemeToggleIcon} alt="светлая тема" />
                </div>
                <NavLink to='/statement' className={s.nav__item}>Журнал</NavLink>
                <NavLink to='/map' className={s.nav__item}>Карта</NavLink>

        </Navbar>
    );
}

export default NavBar;