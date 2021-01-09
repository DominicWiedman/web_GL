import '../style/NavBar.css'
import React from "react";
import {NavLink} from "react-router-dom";
export default function NavBar() {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink className='NavLink' activeClassName='active' to='/home'>Главная</NavLink></li>
                    <li><NavLink className='NavLink' activeClassName='active' to='/login'>Авторизация</NavLink></li>
                    <li><NavLink className='NavLink' activeClassName='active' to='/tasks'>Таски</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}