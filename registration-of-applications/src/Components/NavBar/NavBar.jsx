import React from "react";
import s from './navbar.module.sass';
import 'animate.css';
import {Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

import lightThemeToggleIcon from '../../img/ligthThemeIcon.svg';
import darkThemeToggleIcon from '../../img/darkThemeIcon.svg';
import {ThemeContext, themes} from "../../contexts/ThemeContext";
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "../../store/reducers/logReducer";
import {Button} from "antd";

const NavBar = () => {
    const dispatch = useDispatch();
    const count = useSelector(store => store.logPage.count);
    const plusOne = (count) => {
        dispatch(setCount(count + 5))
    }

    return(
        <ThemeContext.Consumer>
            {({theme, setTheme}) => (
                <Navbar className={s.nav__container} >
                    <button className={s.toggle__theme} onClick={() => {
                        if (theme === themes.light) setTheme(themes.dark)
                        if (theme === themes.dark) setTheme(themes.light) }}>

                        {theme === themes.light ? <img src={ lightThemeToggleIcon } alt="светлая тема" /> :
                        <img src={darkThemeToggleIcon} alt="dark mode"/>}
                    </button>
                    <NavLink to='/statement' className={s.nav__item}>Журнал</NavLink>
                    <NavLink to='/map' className={s.nav__item}>Карта</NavLink>


                </Navbar>
            )}
        </ThemeContext.Consumer>
    );
}

export default NavBar;