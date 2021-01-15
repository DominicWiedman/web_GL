import {action, makeObservable, observable} from "mobx";
import Network from "../../services/Network";

class TasksStore {
    constructor() {
        makeObservable(this)
    }


    @observable addInput = '';
    @observable tasks = [];
    @observable loader = false;

    @action setAddInput = event => {
        this.addInput = event.target.value;
    };

    @action checkTodo = (todo, event) => {
        todo.done = !todo.done;

        const index = this.tasks.findIndex(item => item.id === todo.id);

        this.tasks.splice(index, 1, todo);
    }


    @action
    sendTodo = async event => {
        const token = localStorage.getItem('token')
        event.preventDefault()

        try {
            let body = {
                title: 'something',
                body: this.addInput,
                done: false
            };
            await Network(`tasks?access_token=${token}`, 'POST', body)
        } catch (e) {
            console.log(e)
        }
        window.location.reload()

    };


    @action loadTasks = () => {
        const token = localStorage.getItem('token')

        this.loader = true;
        Network(`tasks?access_token=${token}`)
            .then(data=>(this.tasks = data))
            .catch(error=>{
                console.log(error)
            })
            .finally(() => {
                this.loader = false
            })
    }
}
const tasksStore = new TasksStore();
export default tasksStore;


