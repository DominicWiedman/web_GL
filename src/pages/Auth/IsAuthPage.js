import React from "react";
import {inject, observer} from "mobx-react";
import {NavLink} from "react-router-dom";

export const IsAuthPage = inject('store')(observer((props) => {


    return (
        <>
            <h1>Вы авторизованы!</h1>

                <button onClick={props.store.authStore.logOut} className="button">Выйти</button>

</>



    )
}));