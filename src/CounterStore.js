import {action, observable} from "mobx";

class Counter {
    @observable count = 0;

    @action
    increment(){
        this.count++;
    }
}

export default new Counter();