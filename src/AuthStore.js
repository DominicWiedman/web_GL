import {action, makeObservable, observable} from "mobx";
import Network from "./services/Network";

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
    SendReg = async event => {
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
    };



}

const authStore = new AuthStore()
export default authStore;