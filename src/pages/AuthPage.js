import React from "react";
import '../style/AuthPage.css'
import {inject, observer} from "mobx-react";
import {NavLink} from "react-router-dom";


export const AuthPage = inject('store')(observer((props) => {
    const Input = (name, type='text') =>  <input value={props.store.valuesAuth[name]}  name={name} onChange={props.store.setValues}
                                      type={type} className= 'input' placeholder={name}/>

    return (
        <>
            <form className='main'>

                <h1 className="form_title">Авторизируйтесь</h1>

                {Input('email' )}
                {Input('password', 'password')}

                <button onClick={props.store.SendAuth} className="button">Войти</button>
                <NavLink className='new_account'  to='/reg'>Новая учетная запись</NavLink>


            </form>

        </>
    )
}));
