import {action, makeObservable, observable} from "mobx";
import Network from "../../services/Network";
import {Redirect, Route, Switch} from "react-router-dom";
import React from "react";


class AuthStore {

    constructor() {
        makeObservable(this)
    }


    @observable valuesAuth = {
        email: "",
        username: "",
        password: "",
    }


    @action setValues = event => {
        this.valuesAuth[event.target.name] = event.target.value
    };


    @action
    sendReg = async event => {
        event.preventDefault()
        try {
            let body = {
                username: this.valuesAuth.username,
                email: this.valuesAuth.email,
                password: this.valuesAuth.password
            };
            await Network('users', 'POST', body)
        } catch (e) {
            console.log(e)
        }
        window.location.reload()

    };
    @action
    sendAuth = async event => {
        event.preventDefault()
        try {
            let body = {
                email: this.valuesAuth.email,
                password: this.valuesAuth.password
            };
           const response = await Network('users/login', 'POST', body)
            localStorage.setItem('token', response.id)
        } catch (e) {
            console.log(e)
        }
        window.location.reload()
        (<Redirect to='/tasks'/>)
    };

    @action
    logOut = () => {
         localStorage.removeItem('token')
        window.location.reload()
        (<Redirect to='/home'/>)
    }
}

const authStore = new AuthStore()
export default authStore;