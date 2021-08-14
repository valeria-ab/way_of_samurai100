import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'/>
        <div className={s.login}>
            {
                props.isAuth
                    ? <div>{props.userName} - <button onClick={props.logout}>Log out</button>    </div>
                    : <NavLink to={"/login"}>Log In</NavLink>
            }

        </div>

    </header>
}

export default Header;