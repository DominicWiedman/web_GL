import {action, observable} from "mobx";

class CounterStore {
    @observable count = 0;

    @action
    increment(){
        this.count++;
    }
}
const counterStore = new CounterStore()
export default counterStore;