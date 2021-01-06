import {action, makeObservable, observable} from "mobx";

class CounterStore {

    constructor() {
        makeObservable(this)
    }

    @observable count = 0;

    @action
    increment = ()  => {
        console.log(`before ${this.count}`)
        this.count++;
        console.log(`after ${this.count}`)
    }


}

const counterStore = new CounterStore()
export default counterStore;