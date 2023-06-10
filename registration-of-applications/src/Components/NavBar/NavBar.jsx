import React from "react";
import s from './navbar.module.scss';
import {Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

import lightThemeToggleIcon from '../../img/ligthThemeIcon.svg';
import {ThemeContext, themes} from "../../contexts/ThemeContext";

const NavBar = () => {
    return(
        <ThemeContext.Consumer>
            {({theme, setTheme}) => (
                <Navbar className={s.nav__container}>
                    <div className={s.toggle__theme} onClick={() => {
                        if (theme === themes.light) setTheme(themes.dark)
                        if (theme === themes.dark) setTheme(themes.light)
                    }
                    }>
                        <img src={lightThemeToggleIcon} alt="светлая тема" />
                    </div>
                    <NavLink to='/statement' className={s.nav__item}>Журнал</NavLink>
                    <NavLink to='/map' className={s.nav__item}>Карта</NavLink>

                </Navbar>
            )}

        </ThemeContext.Consumer>

    );
}

export default NavBar;