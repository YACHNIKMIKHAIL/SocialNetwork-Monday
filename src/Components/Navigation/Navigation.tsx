import React from "react";
import style from './Navigation.module.css'
import {Link,NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <div className={style.navigation}>
            <div className={`${style.link} ${style.active}`}>
                <NavLink to='/profile'
                         className={({ isActive }) => (isActive ? style.active : "")}
                >Profile</NavLink>
            </div>
            <div className={`${style.link} ${style.active}`}>
                <NavLink  to='/messages'
                          className={({ isActive }) => (isActive ? style.active : "")}
                              >Messages</NavLink>
            </div>
        </div>
    )
}


