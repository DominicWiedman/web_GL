import React from "react";
import '../style/AuthPage.css'
import {inject, observer} from "mobx-react";


export const AuthPage = inject('store')(observer((props) => {
    const Input = (name, type='text') =>  <input value={props.store.valuesAuth[name]} name={name} onChange={props.store.setValues}
                                      type={type} className={name}  required placeholder={name}/>

    return (
        <>
            <form style={{display: "flex", flexDirection: "column", }}>
                {Input('email' )}
                {Input('username')}
                {Input('password', 'password')}

                <button onClick={props.store.SendReg} className="button">Войти</button>

            </form>
        </>
    )
}));
