import React from "react";
import s from './navbar.module.scss';

const NavBar = () => {
    return(
        <ul className={s.list}>
            <li className={s.navbar__item}>Журнал</li>
            <li className={s.navbar__item}>Карта</li>
        </ul>
    );
}

export default NavBar;